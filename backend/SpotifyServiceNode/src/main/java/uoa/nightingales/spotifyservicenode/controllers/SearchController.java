package uoa.nightingales.spotifyservicenode.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uoa.nightingales.spotifyservicenode.domains.SpotifyResponse;
import uoa.nightingales.spotifyservicenode.pojos.ArtistInfo;
import uoa.nightingales.spotifyservicenode.pojos.TrackInfo;
import uoa.nightingales.spotifyservicenode.services.OrderByPopularityService;
import uoa.nightingales.spotifyservicenode.services.SearchService;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SearchController {

    final SearchService searchService;
    final OrderByPopularityService orderByPopularityService;

    @GetMapping("/tracks")
    public ResponseEntity<SpotifyResponse<TrackInfo>> searchTracks(
            @RequestParam String query,
            @RequestParam(required = false, defaultValue = "10") int maxResults) {
        try {
            SpotifyResponse<TrackInfo> response = searchService.searchMusics(query, maxResults);
            return ResponseEntity.ok(response);
        } catch (JsonProcessingException e) {
            log.warn("json processing exception occurred during processing searching tracks");
            return ResponseEntity.internalServerError().body(null);
        }
    }

    @GetMapping("/artists")
    public ResponseEntity<SpotifyResponse<ArtistInfo>> searchArtists(
            @RequestParam String query,
            @RequestParam(required = false, defaultValue = "10") int maxResults) {
        try {
            SpotifyResponse<ArtistInfo> response = searchService.searchArtists(query, maxResults);
            return ResponseEntity.ok(response);
        } catch (JsonProcessingException e) {
            log.warn("json processing exception occurred during processing searching artists");
            return ResponseEntity.internalServerError().body(null);
        }
    }

    @GetMapping("/tracks/popularity")
    public ResponseEntity<SpotifyResponse<TrackInfo>> orderTracksByPopularity(@RequestParam String query,
                                                                              @RequestParam(required = false, defaultValue = "10") int maxResults) {
        try {
            SpotifyResponse<TrackInfo> trackResponse = searchService.searchMusics(query, maxResults);

            SpotifyResponse<TrackInfo> sortedResponse = orderByPopularityService.orderByPopularity(trackResponse);

            return ResponseEntity.ok(sortedResponse);
        } catch (Exception e) {
            log.warn("json processing exception occurred during processing ordering tracks");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/artists/popularity")
    public ResponseEntity<SpotifyResponse<ArtistInfo>> orderArtistsByPopularity(@RequestParam String query,
                                                                              @RequestParam(required = false, defaultValue = "10") int maxResults) {
        try {
            SpotifyResponse<ArtistInfo> trackResponse = searchService.searchArtists(query, maxResults);

            SpotifyResponse<ArtistInfo> sortedResponse = orderByPopularityService.orderByPopularity(trackResponse);

            return ResponseEntity.ok(sortedResponse);
        } catch (Exception e) {
            log.warn("json processing exception occurred during processing ordering artists");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
