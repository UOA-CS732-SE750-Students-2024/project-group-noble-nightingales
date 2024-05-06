import mongoDBConfig from '../../configs/mongodb-config.json' assert { type: 'json' };
import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import axios from 'axios';

const router = express.Router();


router.get('/signup', async (req, res) => {
const url = concatenateUrl(mongoDBConfig, mongoDBConfig.isUserAlreadyCreated);
try{
    const response = await axios.get(url, {params: req.query});
    if(response.data){
        res.status(409).send('User already exists');
    }else {
        res.send('User does not exist');
    
    }
}catch(error){
    console.error("Error during saving user:", error.response ? error.response.data : error.message);
    res.status(500).send('Error during saving user');
}
});


// username: and email address: in query parameter
router.post('/save', async (req, res) => {
    const url = concatenateUrl(mongoDBConfig, mongoDBConfig.createUser);
    console.log(url);

    try {
        const requestBody = req.body;

        // Sending POST request with the request body
        const response = await axios.post(url, requestBody);

        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        // if the username already exists, return 409
        console.error("Error during signup:", error.response ? error.response.data : error.message);
        res.status(409).send('Username already exists. Please choose a different username.');
    }
})

export default router;

