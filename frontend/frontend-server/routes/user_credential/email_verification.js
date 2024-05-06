import EmailConfig from "../../configs/email-config.json" assert { type: "json" };
import axios from "axios";
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import express from 'express';

const router = express.Router();

// pass request parameter userEmail
router.get('/verify', async (req, res) => {
    const url = concatenateUrl(EmailConfig, EmailConfig.getVerificationCode);
    console.log(url);

    try {
        const response = await axios.get(url, { params: req.query });
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.error("Error during email verification:", error.response ? error.response.data : error.message);
        res.status(500).send('Error during email verification');
    }
})

// request body {userEmail: , verificationCode}
router.post('/verify', async (req, res) => {
    const url = concatenateUrl(EmailConfig, EmailConfig.verifyCode);

    try{
        const response = await axios.post(url, req.body);
        console.log(response.data);
        res.send(response.data);
    }catch(error){
        console.error("Error during email verification:", error.response ? error.response.data : error.message);
        res.status(401).send('Error during email verification');
    }

})

export default router;