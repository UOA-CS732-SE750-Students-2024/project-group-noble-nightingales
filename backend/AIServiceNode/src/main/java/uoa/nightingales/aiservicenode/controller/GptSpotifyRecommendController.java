package uoa.nightingales.aiservicenode.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uoa.nightingales.aiservicenode.services.GptSpotifyRecommendService;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/spotify-recommendations")
public class GptSpotifyRecommendController {

    private final GptSpotifyRecommendService gptSpotifyRecommendService;

    /**
     * Generates Spotify search text based on user input.
     *
     * @param userInput The user's query input.
     * @return ResponseEntity containing the generated Spotify search text.
     */
    @PostMapping("/search")
    public ResponseEntity<String> getSpotifySearchText(@RequestBody String userInput) {
        try {
            String searchText = gptSpotifyRecommendService.getSpotifySearchText(userInput);
            return ResponseEntity.ok(searchText);
        } catch (Exception e) {
            log.error("Error generating Spotify search text for input: {}", userInput, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to generate Spotify search text");
        }
    }

    /**
     * Identifies unwanted Spotify creators based on user input.
     *
     * @param userInput The user's query input for filtering creators.
     * @return ResponseEntity containing a list of unwanted Spotify creator names.
     */
    @PostMapping("/filter")
    public ResponseEntity<List<String>> getUnwantedSpotifyCreators(@RequestBody String userInput) {
        try {
            log.info("request received to get unwanted spotify creators");
            List<String> unwantedCreators = gptSpotifyRecommendService.getUnwantedSpotifyCreators(userInput);
            if (unwantedCreators.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            log.info("the unwanted creators are: " + unwantedCreators);
            return ResponseEntity.ok(unwantedCreators);
        } catch (Exception e) {
            log.error("Error filtering Spotify creators for input: {}", userInput, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
