import express from 'express';
import mongoDBConfig from "../../configs/mongodb-config.json" assert { type: 'json' };
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import axios from 'axios';

const router = express.Router();

// require videoId: in query parameter
router.get('/comments', async (req, res) => {
    const mongodbUrl = concatenateUrl(mongoDBConfig, mongoDBConfig.getCommentsByVideoId)
    try{
        const response = await axios.get(mongodbUrl, {
            params: {
                videoId: req.query.videoId
            }
        })
        res.send(response.data)
    }catch(error){
        console.error("Error during comment retrieval:", error.response ? error.response.data : error.message);
        res.status(404).send("Error during comment retrieval")
    }
    
})

// request body: {videoId: "", userId: "", comments: ""}
router.post('/comments', async (req, res) => {
    const mongodbUrl = concatenateUrl(mongoDBConfig, mongoDBConfig.saveComment)
    try{
        const response = await axios.post(mongodbUrl, req.body)
        res.send(response.data)
    }catch(error){
        console.error("Error during comment saving:", error.response ? error.response.data : error.message);
        res.status(404).send("Error during comment saving")
    }
})

export default router

