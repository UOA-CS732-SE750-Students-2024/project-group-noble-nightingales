package uoa.nightingales.youtubeservicenode.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uoa.nightingales.youtubeservicenode.domains.VideosResponse;
import uoa.nightingales.youtubeservicenode.services.VideoSearchService;

import java.io.IOException;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SearchController {

    final VideoSearchService videoSearchService;

    /**
     * Endpoint to search for videos based on a query string.
     *
     * @param query The search query.
     * @param maxResults The maximum number of results to return.
     * @param pageToken The token for pagination (optional).
     * @return A list of videos matching the search criteria.
     * @throws IOException If an error occurs during the API call.
     */
    @GetMapping("/search")
    public VideosResponse searchVideos(
            @RequestParam String query,
            @RequestParam(defaultValue = "10") long maxResults,
            @RequestParam(required = false) String pageToken) throws IOException {

        log.info("received request to search videos ordered by relevance");
        return videoSearchService.searchVideos(query, maxResults, pageToken);
    }

    /**
     * Endpoint to search for videos from a specific YouTube channel.
     *
     * @param channelId The ID of the YouTube channel.
     * @param maxResults The maximum number of results to return.
     * @param pageToken The token for pagination (optional).
     * @return A list of videos from the specified channel.
     * @throws IOException If an error occurs during the API call.
     */
    @GetMapping("/searchByChannelId")
    public VideosResponse searchVideosByChannelId(
            @RequestParam String channelId,
            @RequestParam(defaultValue = "10") long maxResults,
            @RequestParam(required = false) String pageToken) throws IOException {
        return videoSearchService.searchVideosByChannelId(channelId, maxResults, pageToken);
    }


    /**
     * Endpoint to search for videos based on a query string, results ordered by date
     * Latest videos appear first
     *
     * @param query The search query.
     * @param maxResults The maximum number of results to return.
     * @param pageToken The token for pagination (optional).
     * @return A list of videos matching the search criteria.
     * @throws IOException If an error occurs during the API call.
     */
    @GetMapping("/searchByDate")
    public VideosResponse searchVideosByDate(
            @RequestParam String query,
            @RequestParam(defaultValue = "10") long maxResults,
            @RequestParam(required = false) String pageToken) throws IOException {

        log.info("received request to search videos ordered by date");
        return videoSearchService.searchVideosOrderedByDate(query, maxResults, pageToken);
    }
}
