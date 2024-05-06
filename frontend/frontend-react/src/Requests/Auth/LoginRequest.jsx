import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL

export const LoginRequest = async (username, password) => {
    
    try{
        const response = await axios.post(`${baseUrl}/api/user/login`, {username: username, password: password});
        console.log(response.data);
        return response.data;
    }catch(error){
        if(error.response.status === 401) {
            console.error('Authentication failed:', error.response.data);
            return null;
        }
    }

}