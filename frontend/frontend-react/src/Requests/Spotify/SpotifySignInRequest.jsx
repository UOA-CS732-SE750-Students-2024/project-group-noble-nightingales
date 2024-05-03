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

export const getSpotifyAccessToken = async (userId, setLoginDialogOpen) => {
    try {
        const response = await axios.get(`${baseUrl}/api/music/token`, {params: {userId: userId}});
        console.log('Spotify access token retrieved:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error retrieving Spotify access token:', error.response ? error.response.data : error.message);

        // Check if the error status is 403 and handle it specifically
        if (error.response && error.response.status === 403) {
            console.error('Login required:', error.response.data);
            setLoginDialogOpen(true);
        }

        // Re-throw the error if you need to handle it further up the call stack
        throw error;
    }
}