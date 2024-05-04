import axios from "axios"
const baseUrl = import.meta.env.VITE_API_URL

function generateRandomString() {
    const characters = 'abcdefghiklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export const getSpotifyPopular = async () => {
    const randomString = generateRandomString();
    try {
        const response = await axios.get(`${baseUrl}/api/music/default`, {
            params: { queryParameter: randomString }
        });
        return response.data.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}

