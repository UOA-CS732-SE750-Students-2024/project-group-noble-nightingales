package uoa.nightingales.youtubeservicenode.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uoa.nightingales.youtubeservicenode.domains.VideosResponse;
import uoa.nightingales.youtubeservicenode.services.PopularVideoFetchService;

import java.io.IOException;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PopularVideoController {

    final PopularVideoFetchService popularVideoFetchService;

    /**
     * Endpoint to retrieve a list of globally popular videos.
     *
     * @param maxResults The maximum number of videos to return.
     * @param pageToken A token for pagination (optional).
     * @return A list of popular videos.
     * @throws IOException If there is an error fetching the videos.
     */
    @GetMapping("/popularVideos")
    public VideosResponse getPopularVideos(@RequestParam(defaultValue = "10") long maxResults,
                                           @RequestParam(required = false) String pageToken) throws IOException {
        return popularVideoFetchService.getPopularVideos(maxResults, pageToken);
    }

    /**
     * Endpoint to retrieve a list of videos that are popular and relevant to a specific search query.
     *
     * @param query The search query to filter videos.
     * @param maxResults The maximum number of videos to return.
     * @param pageToken A token for pagination (optional).
     * @return A list of videos matching the search query and popular.
     * @throws IOException If there is an error fetching the videos.
     */
    @GetMapping("/searchPopularVideos")
    public VideosResponse getPopularVideosBySearch(@RequestParam String query,
                                                @RequestParam(defaultValue = "10") long maxResults,
                                                @RequestParam(required = false) String pageToken) throws IOException {
        return popularVideoFetchService.getPopularVideosBySearch(query, maxResults, pageToken);
    }

}
