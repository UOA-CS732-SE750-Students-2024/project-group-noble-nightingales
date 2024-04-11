import mysqlConfig from '../../configs/mysql-config.json' assert { type: 'json' };
import express from 'express';
import jwt from 'jsonwebtoken';
import { concatenateUrl } from '../../helpers/UrlHelper.js';
import axios from 'axios';



const router = express.Router();

const authenticateUser = async (username, password) => {
    const url = concatenateUrl(mysqlConfig, mysqlConfig.getIdOfUser);
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
        // Check if the error is because of the user was not found
        if (error.response && error.response.status === 404) {
            console.log('User not found, returning false');
            return false; // Return false if user was not found
        }
        
        // If the error is due to other reasons, log and re-throw it
        console.error("Error during authentication:", error.response ? error.response.data : error.message);
        throw error;
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

            // Send the token to the client
            res.json({ token, userId });
        } else {
            // Authentication failed
            res.status(401).send('Authentication failed. Invalid username or password.');
        }
    } catch (error) {
        // Handle unexpected errors
        console.error('Login error:', error);
        res.status(500).send('An error occurred during the login process.');
    }
});


export default router