import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL

export const SignupRequest = async (username, email, dateOfBirth, password) => {
    try{
        const response = await axios.post(`${baseUrl}/api/user/save`, {username: username, email: email, dateOfBirth: dateOfBirth, password: password});
        console.log(response.data);
        return response.data;
    }catch(error){
        if(error.response.status === 409) {
            console.error('Username already exists:', error.response.data);
            return 409;
        } else {
            return 400;
        }
    }
}

export const CheckIfUserExistRequest = async (username, email) => {
    try{
        const response = await axios.get(`${baseUrl}/api/user/signup`, {params: {username: username, emailAddress: email}});
        console.log(response.data);
        return response.data;
    }catch(error){
        if(error.response.status === 409) {
            console.error('User already exists:', error.response.data);
            return 409;
        } else {
            return 400;
        }
    }
}

export const SendVerificationCodeRequest = async (email) => {
    try{
        axios.get(`${baseUrl}/api/user/verify`, {params: {userEmail: email}});
    }catch(error){
        console.error('Error sending verification code:', error.response ? error.response.data : error.message);
    }
}

export const VerifyCodeRequest = async (email, code) => {
    try {
        const response = await axios.post(`${baseUrl}/api/user/verify`, {
            userEmail: email,
            verificationCode: code
        });

        console.log('Verification success:', response.data);
        return response.data;
    } catch (error) {
        if(error.response.status === 401) {
            return 401;
        }
        console.error('Error verifying code:', error.response ? error.response.data : error.message);
        // You may want to re-throw the error to handle it elsewhere in your app
        throw error;
        
    }
}