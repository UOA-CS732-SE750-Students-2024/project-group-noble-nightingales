import mongoDBConfig from '../../configs/mongodb-config.json' assert { type: 'json' };
import express from 'express';
import jwt from 'jsonwebtoken';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import axios from 'axios';



const router = express.Router();

const authenticateUser = async (username, password) => {
    const url = concatenateUrl(mongoDBConfig, mongoDBConfig.isUserInDatabase);
    console.log(url);

    try {
        const requestBody = {
            username: username,
            password: password
        };

        // Sending POST request with the request body
        const response = await axios.post(url, requestBody);

        console.log(response.data);
        
        return response.data; 
    } catch (error) {

        if (error.response && error.response.status === 404) {
            // If the error is due to other reasons, log and re-throw it
            console.error("Error during authentication:", error.response ? error.response.data : error.message);
            throw error;
        }
    }
};

const JWT_SECRET_KEY = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const userId = await authenticateUser(username, password);

        // If authentication is successful, authenticationResult is truthy (e.g., user ID)
        if (userId) {
            // Generate JWT
            const token = jwt.sign({ user_id: userId }, JWT_SECRET_KEY, { expiresIn: '1h' });
            
            // Set the userId cookie
            res.cookie('userId', userId);
            // Send the token to the client
            res.json({ token, userId });
        } else {
            // Authentication failed
            res.status(401).send('Authentication failed. Invalid username or password.');
        }
    } catch (error) {
        console.error('Login error:', error);
        // Authentication failed
        res.status(401).send('Authentication failed. Invalid username or password.');
    }
});


export default router