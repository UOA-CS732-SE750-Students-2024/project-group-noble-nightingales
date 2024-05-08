import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import axios from 'axios';
import youtubeConfig from '../../configs/youtube-config.json' assert { type: 'json' };

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
        console.log("search_videos.js 16")
        console.log(response.data);
        res.json(response.data);

    } catch (error) {
        // if error occurs, please check if youtube service node has booted successfully
        console.error("Error during fetching default videos:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during fetching default videos');
    }


});

export default router;