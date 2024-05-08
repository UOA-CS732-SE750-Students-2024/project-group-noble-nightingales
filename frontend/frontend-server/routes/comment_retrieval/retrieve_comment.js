import express from 'express';
import mongoDBConfig from "../../configs/mongodb-config.json"
import { concatenateUrl } from 'helpers/UrlHelper';
import axios from 'axios';

const router = express.Router();

// require videoId: in query parameter
router.get('/retrieve_comment', async (req, res) => {
    const mongodbUrl = concatenateUrl(mongoDBConfig.getCommentsByVideoId)
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
    const mongodbUrl = concatenateUrl(mongoDBConfig.saveComment)
    try{
        const response = await axios.post(mongodbUrl, req.body)
        res.send(response.data)
    }catch(error){
        console.error("Error during comment saving:", error.response ? error.response.data : error.message);
        res.status(404).send("Error during comment saving")
    }
})

export default router

