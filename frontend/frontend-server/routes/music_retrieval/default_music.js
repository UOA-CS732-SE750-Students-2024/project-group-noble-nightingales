import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import spotifyConfig from '../../configs/spotify-config.json' assert { type: 'json' };
import axios from 'axios';

const router = express.Router();

router.get('/default', async (req, res) => {
    const url = concatenateUrl(spotifyConfig, spotifyConfig.orderTracksByPopularity);
    console.log(url);
    const queryParameter = req.query.queryParameter;
    try {
        const params = {
            query: queryParameter,
            maxResults: 6
        };
        const response = await axios.get(url, { params });

        // console.log(response);
        res.json(response.data);

    } catch (error) {
        // if error occurs, please check if spotify service node has booted successfully
        console.error("Error during fetching default music:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during fetching default music');
    }
});

export default router;