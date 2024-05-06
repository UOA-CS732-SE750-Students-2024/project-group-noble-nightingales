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

export const getSpotifyRandomResult = async () => {
    const randomString = generateRandomString();
    try {
        const response = await axios.get(`${baseUrl}/api/music/search`, {
            params: { query: randomString, maxResults: 30 }
        });
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}

export const getSpotifySearchResult = async (userInput) => {
    try {
        const response = await axios.get(`${baseUrl}/api/music/search`, {
            params: { query: userInput, maxResults: 30 }
        });
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
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

export const getSpotifyRecommendation = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/api/music/recommendation`, {
            params: {
                userId: userId
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}

export const getYouTubePopular = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/video/default`);
        console.log(response.data.videoList)
        return response.data.videoList;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}

export const getSpotifyAiSearchResult = async (input) => {
    try {
        const response = await axios.get(`${baseUrl}/api/music/ai-search`, {
            params: { userInput: input }
        });
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}

export const clickOnMusic = async (authorName, userId) => {
    try {
        axios.post(`${baseUrl}/api/music/click`, null, {
            params: { creatorName: authorName, userId: userId }
        });
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}

export const filterMusic = async (userInput) => {
    try {
        const response = await axios.post(`${baseUrl}/api/music/filter`, {
            userInput: userInput
        });
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}

export const getMoreMusic = async (pageUrl) => {
    try{
        const response = await axios.get(`${baseUrl}/api/music/more`, {params: {pageUrl: pageUrl}});
        return response.data;
    } catch (error) { 
        console.error("Error retrieving data:", error);
    }
}
