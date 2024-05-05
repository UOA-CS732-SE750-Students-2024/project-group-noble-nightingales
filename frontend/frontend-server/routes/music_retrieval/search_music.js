import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import spotifyConfig from '../../configs/spotify-config.json' assert { type: 'json' };
import engineConfig from '../../configs/engine-config.json' assert { type: 'json' };
import mongoDBConfig from '../../configs/mongodb-config.json' assert { type: 'json' };
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


export default router;