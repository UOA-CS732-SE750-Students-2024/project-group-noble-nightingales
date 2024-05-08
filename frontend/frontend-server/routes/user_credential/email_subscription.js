import EmailConfig from "../../configs/email-config.json" assert { type: "json" };
import axios from "axios";
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import express from 'express';

const router = express.Router();

// pass request parameter userEmail
router.get('/subscribe', async (req, res) => {
    const url = concatenateUrl(EmailConfig, "/api/subscribe");
    console.log(url);

    try {
        const response = await axios.get(url, { params: req.query });
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.error("Error during email subscription:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during email subscription');
    }
})

export default router