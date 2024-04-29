package uoa.nightingales.spotifyservicenode.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uoa.nightingales.spotifyservicenode.domains.FinalSpotifyAuthenticationResponse;
import uoa.nightingales.spotifyservicenode.domains.SpotifyAuthenticationResponse;
import uoa.nightingales.spotifyservicenode.services.SpotifyAuthenticationService;

/**
 * Logic Flow: Express to send login request to get a redirect url for the spotify sign-in page
 * After signing in, the client generates a request to the call back endpoint in the express server.
 * Upon receiving the request, the express server sends a request to the call back endpoint on this server,
 * which generates an access token and refresh token that could be used by clients
 */
@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SpotifyAuthenticationController {

    final SpotifyAuthenticationService spotifyAuthenticationService;

    /**
     * Redirects the user to the Spotify login URL.
     * @return A redirect view to Spotify's authentication page.
     */
    @GetMapping("/auth/login")
    public ResponseEntity<SpotifyAuthenticationResponse> redirectToSpotify(@RequestParam String redirectUri) {
        log.info("received request to generate link that navigates to spotify login page");
        SpotifyAuthenticationResponse response = spotifyAuthenticationService.getSpotifyLoginUrl(redirectUri);
        return ResponseEntity.ok(response);
    }

    /**
     * Handles the callback from Spotify after the user has authenticated.
     * Exchanges the authorization code for an access token and refresh token.
     *
     * @param code The authorization code provided by Spotify.
     * @return A response entity containing the tokens or an error message.
     */
    @GetMapping("/auth/callback")
    public ResponseEntity<?> handleSpotifyCallback(@RequestParam String code, @RequestParam String redirectUri) {
        log.info("received request to generate access token and refresh token");
        try {
            FinalSpotifyAuthenticationResponse finalResponse = spotifyAuthenticationService.getSpotifyTokens(code, redirectUri);
            if(finalResponse != null){
                return ResponseEntity.ok(finalResponse);
            }
            return ResponseEntity.internalServerError().body("Failed to generate tokens from spotify");
        } catch (JsonProcessingException e) {
            return ResponseEntity.internalServerError().body("Failed to process the response from Spotify.");
        }
    }

    /**
     * Handles the request to refresh the Spotify access token using a provided refresh token.
     * This endpoint receives a POST request containing the refresh token in the request body.
     * Upon successful refresh, it returns the new access token. If the process fails,
     * it returns an error message.
     *
     * @param refreshToken The refresh token received from the client, used to request a new access token.
     * @return A {@code ResponseEntity<String>} containing either the new access token or an error message.
     *         Returns {@code 200 OK} with the new access token if the refresh is successful.
     *         Returns {@code 500 Internal Server Error} if there is an error during the token generation process.
     */
    @GetMapping("/auth/refresh")
    public ResponseEntity<String> refreshToken(@RequestBody String refreshToken) {
        log.info("receiving request to generate new access token based on refresh token");
        try{
            String accessToken = spotifyAuthenticationService.refreshAccessToken(refreshToken);
            return ResponseEntity.ok(accessToken);
        }catch (JsonProcessingException e){
            return ResponseEntity.internalServerError().body("Failed to generate access token");
        }
    }


    /**
     * Retrieves the access token for a specified user.
     *
     * @param userId The unique identifier of the user whose access token is being requested.
     * @return a {@link ResponseEntity} containing the access token if present, or a {@link ResponseEntity} with a not-found status.
     */
    @GetMapping("/auth/token")
    public ResponseEntity<String> getAccessToken(@RequestParam String userId) {
        if(spotifyAuthenticationService.isAccessTokenPresent(userId)){
            return ResponseEntity.ok(spotifyAuthenticationService.getAccessToken(userId));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Saves both the access and refresh tokens for a specified user.
     * This method handles the POST request to store new token values, which are essential for maintaining
     * the user's session and authentication state across interactions with the Spotify API.
     *
     * @param userId The unique identifier of the user for whom the tokens are to be saved. This ID should
     *               uniquely identify the user within the system.
     * @param accessToken The access token obtained from Spotify that grants temporary access to the user's
     *                    Spotify data.
     * @param refreshToken The refresh token obtained from Spotify which can be used to renew the access token
     *                     when it expires.
     * @return a {@link ResponseEntity} object with HTTP status code indicating the result of the operation.
     *         This typically returns HTTP status code 201 (Created) if tokens are successfully saved.
     */
    @PostMapping("/auth/token")
    public ResponseEntity<Void> saveTokens(@RequestParam String userId, @RequestParam String accessToken
                                            , @RequestParam String refreshToken) {
        spotifyAuthenticationService.saveTokens(userId, accessToken, refreshToken);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
