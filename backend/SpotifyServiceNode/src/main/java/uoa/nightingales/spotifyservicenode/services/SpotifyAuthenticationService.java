package uoa.nightingales.spotifyservicenode.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import uoa.nightingales.spotifyservicenode.domains.FinalSpotifyAuthenticationResponse;
import uoa.nightingales.spotifyservicenode.domains.SpotifyAuthenticationResponse;

public interface SpotifyAuthenticationService {


    /**
     * Generates a URL for logging into Spotify. This URL directs users to Spotify's
     * authorization page where they can authorize the application to access their
     * Spotify account based on specified permissions.
     *
     * @param redirectUri The URI to which Spotify will redirect the user after they
     *                    authorize the application. This URI must be registered with
     *                    the Spotify Dashboard for the application.
     * @return A {@link SpotifyAuthenticationResponse} containing the URL to which
     *         the user should be redirected to initiate the login process.
     */
    SpotifyAuthenticationResponse getSpotifyLoginUrl(String redirectUri);


    /**
     * Retrieves Spotify tokens using an authorization code received after the user
     * has authorized the application. This method exchanges the authorization code
     * for an access token and a refresh token.
     *
     * @param authorizationCode The authorization code that Spotify provided after
     *                          the user authorized the application.
     * @param redirectUri       The same redirect URI that was used to obtain the
     *                          authorization code. This must match the URI registered
     *                          on the Spotify Dashboard.
     * @return A {@link FinalSpotifyAuthenticationResponse} containing the access
     *         token, refresh token, and other details provided by Spotify.
     * @throws JsonProcessingException If there is an error in processing the JSON
     *                                 response from Spotify.
     */
    FinalSpotifyAuthenticationResponse getSpotifyTokens(String authorizationCode, String redirectUri) throws JsonProcessingException;

    String refreshAccessToken(String refreshToken) throws JsonProcessingException;

}
