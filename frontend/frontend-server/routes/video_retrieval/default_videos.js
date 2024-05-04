import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import youtubeConfig from '../../configs/youtube-config.json' assert { type: 'json' };
import axios from 'axios';

const router = express.Router();

router.get('/default', async (req, res) => {
    const url = concatenateUrl(youtubeConfig, youtubeConfig.getPopularVideos);
    console.log(url);
    try {
        const params = {
            maxResults: 8
        };
        const response = await axios.get(url, { params });

        console.log(response.data);
        res.json(response.data);

    } catch (error) {
        // if error occurs, please check if youtube service node has booted successfully
        console.error("Error during fetching default videos:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during fetching default videos');
    }


});

export default router;