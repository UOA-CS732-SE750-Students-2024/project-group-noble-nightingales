import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import axios from 'axios';
import youtubeConfig from '../../configs/youtube-config.json' assert { type: 'json' };
import aiConfig from '../../configs/ai-config.json' assert { type: 'json' };

const router = express.Router();
router.get('/search', async (req, res) => {
    const url = concatenateUrl(youtubeConfig, youtubeConfig.searchVideos);
    console.log(url);
    try {
        const params = {
            maxResults: req.query.maxResults,
            query:req.query.query
        };
        const response = await axios.get(url, { params });
        // console.log("search_videos.js 16")
        // console.log(response.data);
        res.json(response.data);

    } catch (error) {
        // if error occurs, please check if youtube service node has booted successfully
        console.error("Error during fetching default videos:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during fetching default videos');
    }
});

router.get('/more', async (req, res) => {
    const url = concatenateUrl(youtubeConfig, youtubeConfig.searchVideos);
    console.log(url);
    try {
        const params = {
            maxResults: req.query.maxResults,
            query:req.query.query,
            pageToken:req.query.pageToken
        };
        const response = await axios.get(url, { params });
        console.log("search_videos.js 37")
        // console.log(response.data);
        res.json(response.data);

    } catch (error) {
        // if error occurs, please check if youtube service node has booted successfully
        console.error("Error during fetching default videos:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during fetching default videos');
    }
});

router.get('/ai-search', async (req, res) => {
    const gptServiceUrl = concatenateUrl(aiConfig, aiConfig.getNotRelevantCategories);
    const youtubeSearchUrl = concatenateUrl(youtubeConfig, youtubeConfig.searchVideos);

    // Assume `userInput` is passed as a query parameter
    const userInput = req.query.userInput;
    if (!userInput) {
        return res.status(400).send("No input provided for search");
    }

    let searchText;

    // Step 1: Post to GPT service to get search text
    try {
        const searchResponse = await axios.get(gptServiceUrl, {
            params: { userInput: userInput },
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(searchResponse)
        searchText = searchResponse.data;
        console.log("Generated search text:", searchText);
    } catch (error) {
        console.error("Error generating YouTube search text:", error.response ? error.response.data : error.message);
        return res.status(500).send('Failed to generate YouTube search text');
    }

    // Step 2: Use the obtained search text to search YouTube
    try {
        const videoSearchResponse = await axios.get(youtubeSearchUrl, { 
            params: { query: searchText, maxResults: 20 }
        });
        console.log("Search results:", videoSearchResponse.data);
        res.json(videoSearchResponse.data);
    } catch (error) {
        console.error("Error during searching video:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during searching video');
    }
});

export default router;