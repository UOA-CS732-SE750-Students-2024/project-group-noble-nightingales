package uoa.nightingales.spotifyservicenode.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uoa.nightingales.spotifyservicenode.domains.SpotifyResponse;
import uoa.nightingales.spotifyservicenode.pojos.ArtistInfo;
import uoa.nightingales.spotifyservicenode.pojos.TrackInfo;
import uoa.nightingales.spotifyservicenode.services.SwitchPageService;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PaginationController {

    final SwitchPageService<TrackInfo> trackSwitchPageService;
    final SwitchPageService<ArtistInfo> artistSwitchPageService;

    @GetMapping("/tracks/switch")
    public ResponseEntity<SpotifyResponse<TrackInfo>> nextTracksPage(@RequestParam String pageUrl) {
        try {
            SpotifyResponse<TrackInfo> response = trackSwitchPageService.switchPage(pageUrl);
            return ResponseEntity.ok(response);
        } catch (JsonProcessingException e) {
            log.warn("json exception occurred while processing switching page of tracks");
            return ResponseEntity.internalServerError().body(null);
        }
    }

    @GetMapping("/artists/switch")
    public ResponseEntity<SpotifyResponse<ArtistInfo>> nextArtistsPage(@RequestParam String pageUrl) {
        try {
            SpotifyResponse<ArtistInfo> response = artistSwitchPageService.switchPage(pageUrl);
            return ResponseEntity.ok(response);
        } catch (JsonProcessingException e) {
            log.warn("json exception occurred while processing switching page of artists");
            return ResponseEntity.internalServerError().body(null);
        }
    }

}
