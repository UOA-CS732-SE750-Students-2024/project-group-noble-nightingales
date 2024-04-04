package uoa.nightingales.youtubeservicenode.services;

import uoa.nightingales.youtubeservicenode.domains.VideosResponse;
import uoa.nightingales.youtubeservicenode.pojos.Video;

import java.io.IOException;

public interface VideoSearchService {

    /**
     * Searches for videos on YouTube based on a specified query string.
     * This method returns a list of videos that match the search criteria.
     *
     * @param query The search query string to find videos related to. (Not limited to video title)
     * @param maxResults The maximum number of video results to return. This value should be a positive integer.
     * @param pageToken The token for pagination. A null or empty string indicates the first page.
     * @return A list of {@link Video} objects that match the search criteria. If no videos are found, returns an empty list.
     * @throws IOException If there is an issue communicating with the YouTube Data API.
     */
    VideosResponse searchVideos(String query, long maxResults, String pageToken) throws IOException;


    /**
     * Searches for videos published by a specific YouTube channel, identified by the channel's unique ID.
     * This method allows for filtering videos to those from a single channel.
     *
     * @param channelId The unique identifier of the YouTube channel whose videos are to be retrieved.
     * @param maxResults The maximum number of video results to return. This value should be a positive integer.
     * @param pageToken The token for pagination. A null or empty string indicates the first page.
     * @return A list of {@link Video} objects published by the specified channel. If no videos are found, returns an empty list.
     * @throws IOException If there is an issue communicating with the YouTube Data API.
     */
    VideosResponse searchVideosByChannelId(String channelId, long maxResults, String pageToken) throws IOException;


    VideosResponse searchVideosOrderedByDate(String query, long maxResults, String pageToken) throws IOException;
}
