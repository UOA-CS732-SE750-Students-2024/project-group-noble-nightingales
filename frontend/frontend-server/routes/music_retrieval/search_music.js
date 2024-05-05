import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import spotifyConfig from '../../configs/spotify-config.json' assert { type: 'json' };
import engineConfig from '../../configs/engine-config.json' assert { type: 'json' };
import mongoDBConfig from '../../configs/mongodb-config.json' assert { type: 'json' };
import aiConfig from '../../configs/ai-config.json' assert { type: 'json' };
import axios from 'axios';
import authenticateJWT from '../../authenticate/authentication.js';

const router = express.Router();

router.get('/search', authenticateJWT, async (req, res) => {
    const url = concatenateUrl(spotifyConfig, spotifyConfig.searchTracks);
    console.log(url);
    console.log(req.query);
    axios.get(url, { params: req.query })
        .then(response => {
            console.log(response.data);
            res.json(response.data);
        })
        .catch(error => {
            console.error("Error during searching music:", error.response ? error.response.data : error.message);
            res.status(500).send('Error during searching music');
        });

})

// query paramter "creatorName"
router.post('/click', async (req, res) => {
    const url = concatenateUrl(engineConfig, engineConfig.addCreator);
    const mongoDBUrl = concatenateUrl(mongoDBConfig, mongoDBConfig.getCreatorsByUserId);
    const mongoDbSaveUrl = concatenateUrl(mongoDBConfig, mongoDBConfig.saveCreatorList);

    // const userId = req.cookies.userId;

    axios.get(mongoDBUrl, { params: { userId: "test" } })
        .then(response => {
            console.log(response.data);
            axios.post(url, response.data, {
                params: req.query
            }).then(response => {
                console.log(response.data);
                const creatorData = {
                    userId: "test",
                    creatorList: response.data
                }
                axios.post(mongoDbSaveUrl, creatorData);
                console.log(response.data);
                res.send("ok")
            }).catch(error => {
                console.error("Error during adding creator:", error.response ? error.response.data : error.message);
                res.status(500).send('Error during adding creator');
            });
        })
        .catch(error => {
            console.error("Error during retrieving creator:", error.response ? error.response.data : error.message);
            res.status(500).send('Error during retrieving creator');
        });
})


router.get("/recommendation", async (req, res) => {
    const mongoDBUrl = concatenateUrl(mongoDBConfig, mongoDBConfig.getCreatorsByUserId);
    const spotifySearchUrl = concatenateUrl(spotifyConfig, spotifyConfig.searchTracks);

    try {
        const creatorsResponse = await axios.get(mongoDBUrl, { params: { userId: "test" } });
        let creators = creatorsResponse.data;

        if (!creators || !Array.isArray(creators) || creators.length === 0) {
            creators = ["Taylor Swift", "Taylor Swift", "Taylor Swift"];
        } else if (creators.length < 3) {
            while (creators.length < 3) {
                creators.push("Taylor Swift");
            }
        }

        // Remove duplicates and ensure only the first 3 are considered
        const uniqueCreators = [...new Set(creators.slice(0, 3))];

        // Store all tracks from each artist
        let allTracks = [];

        // Search for tracks for each creator
        await Promise.all(uniqueCreators.map(async (creator) => {
            const response = await axios.get(spotifySearchUrl, { 
                params: { query: creator, maxResults: 50 } // Adjust maxResults as needed
            });
            allTracks = [...allTracks, ...response.data.data];
        }));

        // Shuffle array and pick the first 10 unique tracks
        const shuffledTracks = allTracks.sort(() => 0.5 - Math.random());
        const selectedTracks = shuffledTracks.slice(0, 10);

        console.log("Selected tracks:", selectedTracks);
        res.json(selectedTracks);
    } catch (error) {
        console.error("Error during retrieving or processing tracks:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during retrieving or processing tracks');
    }
});


// add user input text to request body with name userInput
router.post('/filter', async (req, res) => {
    // Configuring URLs
    const mongoDBUrl = concatenateUrl(mongoDBConfig, mongoDBConfig.getCreatorsByUserId);
    const aiUrl = concatenateUrl(aiConfig, aiConfig.getUnwantedSpotifyCreators);
    const engineUrl = concatenateUrl(engineConfig, engineConfig.removeCreator);
    const saveCreatorUrl = concatenateUrl(mongoDBConfig, mongoDBConfig.saveCreatorList);

    let creatorList;

    // Step 1: Get creators from MongoDB by userId
    try {
        const creatorsResponse = await axios.get(mongoDBUrl, { params: { userId: "test" } });
        creatorList = creatorsResponse.data;
        console.log("Fetched creators:", creatorList);
    } catch (error) {
        console.error("Error fetching creators:", error.response ? error.response.data : error.message);
        return res.status(500).send('Failed to fetch creators');
    }

    let unwantedCreators;

    // Step 2: Send creatorList to AI service to filter unwanted creators
    try {
        const filterResponse = await axios.post(aiUrl, { userInput: req.body.userInput });
        unwantedCreators = filterResponse.data;
        console.log("Unwanted creators identified by AI:", unwantedCreators);
    } catch (error) {
        console.error("Error filtering unwanted creators:", error.response ? error.response.data : error.message);
        return res.status(500).send('Failed to filter unwanted creators');
    }
    let filteredData;
    // Step 3: Remove unwanted creators using an API call to the engine
    try {
        // Data to send with the DELETE request
        const dataBody = {
            creatorList: creatorList,  // Assuming creatorList is an array or string of creators
            unwantedCreators: unwantedCreators  // Presumed to be an array of unwanted creator identifiers
        };
    
        // Making a DELETE request with a body using Axios
        const removalResponse = await axios.delete(engineUrl, {
            data: dataBody  // Axios allows specifying the 'data' property for a DELETE request
        });
    
        console.log("Removed unwanted creators:", removalResponse.data);
        filteredData = removalResponse.data;
    } catch (error) {
        console.error("Error removing creators:", error.response ? error.response.data : error.message);
        return res.status(500).send('Failed to remove unwanted creators');
    }

    // Step 4: Save the updated creator list
    try {
        const spotifyData = {
            userId: "test",
            creatorList: filteredData
        };
        const saveResponse = await axios.post(saveCreatorUrl, spotifyData);
        console.log("Updated creator list saved:", saveResponse.data);
        res.json("Updated creator list processed successfully");
    } catch (error) {
        console.error("Error saving updated creator list:", error.response ? error.response.data : error.message);
        return res.status(500).send('Failed to save updated creator list');
    }
});




export default router;