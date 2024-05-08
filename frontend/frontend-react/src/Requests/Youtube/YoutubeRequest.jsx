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
