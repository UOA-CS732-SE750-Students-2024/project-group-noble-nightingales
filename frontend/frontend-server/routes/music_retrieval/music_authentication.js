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
        const response = await axios.get(url, { params: {redirectUri: "http://localhost:5000/api/music/callback"} });
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
        const response = await axios.get(url, { params: {...req.query, redirectUri: "http://localhost:5000/api/music/callback"} });
        console.log(response.data);

        // saving the refresh token and access token
        const { refreshToken, accessToken } = response.data;
        res.redirect('http://localhost:5000/spotify/signin?accessToken=' + accessToken + '&refreshToken=' + refreshToken);

    }catch(error){
        console.error("Error during retrieving sign in url:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during retrieving sign in url');
    }
});

router.post('/save', async (req, res) => {
    const saveTokenUrl = concatenateUrl(spotifyConfig, spotifyConfig.saveTokens);
    try{
        const responseFromFromSavingData = await axios.post(saveTokenUrl,null, 
            {params: {
                "userId" : req.query.userId,
                "accessToken": req.query.accessToken,
                "refreshToken": req.query.refreshToken}
            }
        );
       console.log(responseFromFromSavingData.data);
       res.send(responseFromFromSavingData.data);
    }catch(error){
        console.error("Error during saving tokens:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during saving tokens');
    }
    
})

export default router;