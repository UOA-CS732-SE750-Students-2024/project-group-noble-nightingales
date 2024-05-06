package uoa.nightingales.mongodbservicenode.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uoa.nightingales.mongodbservicenode.pojos.SpotifyCreatorData;
import uoa.nightingales.mongodbservicenode.services.SpotifyCreatorService;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/spotify")
public class SpotifyCreatorController {

    private final SpotifyCreatorService spotifyCreatorService;

    /**
     * Retrieves a list of Spotify creators associated with a specific user ID.
     *
     * @param userId The user ID for which to retrieve creator data.
     * @return ResponseEntity containing the list of creators or an empty response if no data found.
     */
    @GetMapping("/creators")
    public ResponseEntity<List<String>> getCreatorsByUserId(@RequestParam String userId) {
        List<String> creators = spotifyCreatorService.getCreatorListByUserId(userId);
        if (creators == null || creators.isEmpty()) {
            return ResponseEntity.ok(new ArrayList<>());
        }
        return ResponseEntity.ok(creators);
    }

    /**
     * Saves a list of Spotify creators for a specific user.
     *
     * @param spotifyCreatorData The Spotify creator data to save.
     * @return ResponseEntity indicating the result of the save operation.
     */
    @PostMapping("/creators")
    public ResponseEntity<String> saveCreatorList(@RequestBody SpotifyCreatorData spotifyCreatorData) {
        try {
            spotifyCreatorService.saveCreatorList(spotifyCreatorData);
            return ResponseEntity.ok("Creator list saved successfully");
        } catch (Exception e) {
            log.error("Failed to save creator list: ", e);
            return ResponseEntity.internalServerError().body("Failed to save creator data");
        }
    }
}
