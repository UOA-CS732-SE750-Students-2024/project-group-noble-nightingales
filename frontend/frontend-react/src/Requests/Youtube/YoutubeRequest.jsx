import axios from "axios"
import {generateRandomString} from '../Explore/YoutubeSpotifyRequest'
const baseUrl = import.meta.env.VITE_API_URL

export const getYouTubeSearch = async (query) => {
    console.log(query)
    try {
        const response = await axios.get(`${baseUrl}/api/video/search`, {
            params: { query: query, maxResults: 20 }
        });
        console.log(response.data.videoList)
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error.response.status);
    }
}

export const clickOnYoutube = async (description, userId) => {
    try {
        axios.post(`${baseUrl}/api/video/click`, { videoDescription: description, userId: userId });
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}


export const getYouTubeRandomSearch = async () => {
    const randomString = generateRandomString();
    try {
        const response = await axios.get(`${baseUrl}/api/video/search`, {
            params: { query: randomString, maxResults: 6  }
        });
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error.response.status);
    }
}

export const getMoreVideo = async (nextPageToken,input) => {
    try{
        const response = await axios.get(`${baseUrl}/api/video/more`, {params: {nextPageToken: nextPageToken,query:input,maxResults: 20 }});
        return response.data;
    } catch (error) { 
        console.error("Error retrieving data:", error);
    }
}

export const getYouTubeAiSearchResult = async (input) => {
    try {
        const response = await axios.get(`${baseUrl}/api/video/ai-search`, {
            params: { userInput: input }
        });
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}

export const filterVideo = async (userInput, userId) => {
    try {
        const response = await axios.post(`${baseUrl}/api/video/filter`, {
            filterText: userInput
        }, {params: {userId: userId}});
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}

export const getYouTubeRecommendation = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/api/video/recommendation`, {
            params: {
                userId: userId
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}