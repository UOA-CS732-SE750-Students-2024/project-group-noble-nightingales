import axios from "axios"
const baseUrl = import.meta.env.VITE_API_URL


export const getCommentsByVideoId = async (videoId) => {

    try {
        const response = await axios.get(`${baseUrl}/api/comment/comments`, {
            params: { videoId: videoId }
        });
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
        return null;
    }

}


export const saveComment = async (videoId, userId, comments) => {
    try {
        const comment = {
            videoId: videoId,
            userId: userId,
            comments: comments
        }
        const response = await axios.post(`${baseUrl}/api/comment/comments`, comment);
        return response.data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}