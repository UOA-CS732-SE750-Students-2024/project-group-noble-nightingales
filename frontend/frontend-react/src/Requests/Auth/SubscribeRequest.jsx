import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL

export const SubscribeRequest = async (userEmail) => {
    try{
        const response = await axios.get(`${baseUrl}/api/user/subscribe`, {params: {userEmail: userEmail}});
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error("Error during subscription:", error.response ? error.response.data : error.message);
        return 400;
    }
}