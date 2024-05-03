package uoa.nightingales.spotifyservicenode.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import uoa.nightingales.spotifyservicenode.caches.PrimaryAccessTokenCache;
import uoa.nightingales.spotifyservicenode.caches.SecondaryRefreshTokenCache;
import uoa.nightingales.spotifyservicenode.domains.FinalSpotifyAuthenticationResponse;
import uoa.nightingales.spotifyservicenode.domains.SpotifyAuthenticationResponse;
import uoa.nightingales.spotifyservicenode.utils.StringUtil;

@Slf4j
@RequiredArgsConstructor
@Service("spotifyAuthenticationService")
public class SpotifyAuthenticationServiceImpl implements SpotifyAuthenticationService{

    @Value("${spotify.client.id}")
    private String clientId;

    @Value("${spotify.client.secret}")
    private String clientSecret;
    private static final String SCOPE = "streaming user-read-email user-read-private user-library-read user-read-playback-state user-modify-playback-state";

    private static final String TOKEN_URL = "https://accounts.spotify.com/api/token";

    final RestTemplate restTemplate;

    final PrimaryAccessTokenCache primaryCache;

    final SecondaryRefreshTokenCache secondaryCache;

    @Override
    public SpotifyAuthenticationResponse getSpotifyLoginUrl(String redirectUri) {
        String state = StringUtil.generateRandomString(16);
        log.info("generating spotify login url");
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("response_type", "code");
        params.add("client_id", clientId);
        params.add("scope", SCOPE);
        params.add("redirect_uri", redirectUri);
        params.add("state", state);

        String baseUrl = "https://accounts.spotify.com/authorize";
        return new SpotifyAuthenticationResponse(UriComponentsBuilder.fromHttpUrl(baseUrl).queryParams(params).toUriString(), state);
    }

    @Override
    public FinalSpotifyAuthenticationResponse getSpotifyTokens(String authorizationCode, String redirectUri) throws JsonProcessingException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setBasicAuth(clientId, clientSecret);

        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.add("code", authorizationCode);
        map.add("redirect_uri", redirectUri);
        map.add("grant_type", "authorization_code");

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
        log.info("generating refresh token and access token for user");
        ResponseEntity<String> response = restTemplate.postForEntity(TOKEN_URL, request, String.class);

        if(response.getStatusCode() == HttpStatus.OK){
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.getBody());
            String accessToken = root.path("access_token").asText();
            String refreshToken = root.path("refresh_token").asText();
            log.info("refresh token and access token successfully generated");
            return new FinalSpotifyAuthenticationResponse(accessToken, refreshToken);
        }

        return null;
    }

    @Override
    public String refreshAccessToken(String refreshToken) throws JsonProcessingException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setBasicAuth(clientId, clientSecret);

        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.add("grant_type", "refresh_token");
        map.add("refresh_token", refreshToken);
        log.info("generating access token from refresh token");
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(TOKEN_URL, request, String.class);
        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(response.getBody());
        return root.path("access_token").asText();
    }

    @Override
    public boolean isAccessTokenPresent(String userId) {
        String accessToken = primaryCache.retrieveCache(userId);

        if (accessToken != null) {
            return true;
        }

        String refreshToken = secondaryCache.retrieveCache(userId);

        if(refreshToken == null){
            return false;
        }

        try{
            accessToken = refreshAccessToken(refreshToken);
            primaryCache.saveEntry(userId, accessToken);
        } catch (Exception e) {
            return false;
        }

        return true;
    }

    @Override
    public String getAccessToken(String userId) {
        if(isAccessTokenPresent(userId)){
            return primaryCache.retrieveCache(userId);
        }

        return null;
    }

    @Override
    public void saveTokens(String userId, String accessToken, String refreshToken) {
        primaryCache.saveEntry(userId, accessToken);
        secondaryCache.saveEntry(userId, refreshToken);
    }


}
