import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL

export const getSpotifySignInUrl = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/music/signin`);
        console.log(response.data.url);
        if(response.data) {
            window.location.href = response.data.url
        }
    } catch (error) {
        console.error('Error retrieving Spotify sign-in URL:', error.response ? error.response.data : error.message);
        throw error; 
    }
}