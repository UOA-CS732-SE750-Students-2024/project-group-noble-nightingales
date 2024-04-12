import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import spotifyConfig from '../../configs/spotify-config.json' assert { type: 'json' };
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


export default router;