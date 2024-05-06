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