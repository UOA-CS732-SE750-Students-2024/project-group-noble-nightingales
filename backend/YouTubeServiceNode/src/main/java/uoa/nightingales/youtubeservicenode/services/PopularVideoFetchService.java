package uoa.nightingales.youtubeservicenode.services;

import uoa.nightingales.youtubeservicenode.domains.VideosResponse;
import uoa.nightingales.youtubeservicenode.pojos.Video;

import java.io.IOException;

/**
 * Interface for fetching popular videos from YouTube.
 * This service provides functionalities to retrieve popular videos either globally or based on a specific search query.
 */
public interface PopularVideoFetchService {

    /**
     * Fetches a list of globally popular YouTube videos.
     * This method returns a collection of videos that are trending globally on YouTube,
     * allowing for pagination to access more results.
     *
     * @param maxResult The maximum number of videos to return in one response.
     * @param pageToken A token for pagination, which specifies the page of results to retrieve.
     *                  Use null or an empty string to fetch the first page.
     * @return A list of {@link Video} objects representing the popular videos.
     * @throws IOException If an error occurs while making the API request.
     */
    VideosResponse getPopularVideos(long maxResult, String pageToken) throws IOException;

    /**
     * Fetches a list of YouTube videos that are popular and relevant to a specific search query.
     * This method combines the aspects of search relevance and video popularity to return videos
     * that not only match the search query but are also trending.
     *
     * @param query The search query to filter the videos by.
     *              Videos returned will be relevant to this query and popular.
     * @param maxResult The maximum number of videos to return in one response.
     * @param pageToken A token for pagination, which specifies the page of results to retrieve.
     *                  Use null or an empty string to fetch the first page.
     * @return A list of {@link Video} objects that are both relevant to the search query and popular.
     * @throws IOException If an error occurs while making the API request.
     */
    VideosResponse getPopularVideosBySearch(String query, long maxResult, String pageToken) throws IOException;
}
