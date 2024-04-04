package uoa.nightingales.youtubeservicenode.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uoa.nightingales.youtubeservicenode.pojos.Video;
import uoa.nightingales.youtubeservicenode.services.VideoSearchService;

import java.io.IOException;
import java.util.List;

@RestController
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
    public List<Video> searchVideos(
            @RequestParam String query,
            @RequestParam(defaultValue = "10") long maxResults,
            @RequestParam(required = false) String pageToken) throws IOException {
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
    public List<Video> searchVideosByChannelId(
            @RequestParam String channelId,
            @RequestParam(defaultValue = "10") long maxResults,
            @RequestParam(required = false) String pageToken) throws IOException {
        return videoSearchService.searchVideosByChannelId(channelId, maxResults, pageToken);
    }
}
