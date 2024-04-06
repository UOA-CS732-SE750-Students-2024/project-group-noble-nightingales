package uoa.nightingales.spotifyservicenode.configs;

import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.*;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.client.RestTemplate;

@Slf4j
@Configuration
public class AccessTokenConfiguration {

    @Value("${spotify.client.id}")
    private String clientId;

    @Value("${spotify.client.secret}")
    private String clientSecret;

    private volatile String accessToken;

    @Resource
    private RestTemplate restTemplate;

    @PostConstruct
    public void init() {
        getAndRefresh();
    }


    @Scheduled(fixedDelay  = 480000)
    public void scheduledTokenRefresh() {
        getAndRefresh();
    }

    public String getToken(){
        return this.accessToken;
    }

    private synchronized void getAndRefresh() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setBasicAuth(clientId, clientSecret);

        HttpEntity<String> request = new HttpEntity<>("grant_type=client_credentials", headers);

        ResponseEntity<JsonNode> response = restTemplate.exchange(
                "https://accounts.spotify.com/api/token", HttpMethod.POST, request, JsonNode.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            JsonNode responseBody = response.getBody();
            if (responseBody != null) {
                accessToken = responseBody.get("access_token").asText();
                log.info("successful retrieval of access token, the token is: " + accessToken);
            }
        } else {
            log.warn("Failed to refresh the Spotify access token. Status: " + response.getStatusCode());
        }
    }



}
