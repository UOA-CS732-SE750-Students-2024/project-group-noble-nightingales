import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import spotifyConfig from '../../configs/spotify-config.json' assert { type: 'json' };
import axios from 'axios';

const router = express.Router();

router.get('/token', async (req, res) => {

    try{
        const url = concatenateUrl(spotifyConfig, spotifyConfig.getAccessToken);
        console.log(url);
    
        const response = await axios.get(url, { params: req.query });
        res.send(response.data);
    } catch(error) {
        if(error.response.status === 404) {
            res.status(403).send('Need to login via Spotify');
        } else {
            console.error("Error during retrieving token:", error.response ? error.response.data : error.message);
            res.status(500).send('Error during retrieving token');
        }
        
    }

});

router.get('/signin', async (req, res) => {
    const url = concatenateUrl(spotifyConfig, spotifyConfig.redirectToSpotify);
    console.log(url);

    try{
        const response = await axios.get(url, { params: {redirectUri: "http://localhost:3000/api/music/callback"} });
        res.json(response.data);
    }catch(error){
        console.error("Error during retrieving sign in url:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during retrieving sign in url');
    }
    
});

router.get('/callback', async (req, res) => {
    const url = concatenateUrl(spotifyConfig, spotifyConfig.handleSpotifyCallback);
    console.log(url);

    try{
        // receving the refresh token and access token
        const response = await axios.get(url, { params: {...req.query, redirectUri: "http://localhost:3000/api/music/callback"} });
        console.log(response.data);

        // saving the refresh token and access token
        // const userId = req.cookies.userId;
        const { refreshToken, accessToken } = response.data;

        const saveTokenUrl = concatenateUrl(spotifyConfig, spotifyConfig.saveTokens);
        axios.post(saveTokenUrl, {params: {"userId" : "test", accessToken, refreshToken}});

        res.redirect('http://localhost:3000/explore');

    }catch(error){
        console.error("Error during retrieving sign in url:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during retrieving sign in url');
    }
});

export default router;