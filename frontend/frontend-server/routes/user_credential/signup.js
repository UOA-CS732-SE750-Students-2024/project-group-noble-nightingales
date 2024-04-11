import mysqlConfig from '../../configs/mysql-config.json' assert { type: 'json' };
import express from 'express';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import axios from 'axios';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const url = concatenateUrl(mysqlConfig, mysqlConfig.insertUser);
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
});

export default router;