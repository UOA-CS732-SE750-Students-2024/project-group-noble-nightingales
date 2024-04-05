package uoa.nightingales.spotifyservicenode.utils;

import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import uoa.nightingales.spotifyservicenode.configs.AccessTokenConfiguration;

public class RequestFactory {


    public static HttpHeaders createHeaders(AccessTokenConfiguration accessTokenConfiguration) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + accessTokenConfiguration.getToken());
        return headers;
    }

    public static String makeRequest(String url, RestTemplate restTemplate, AccessTokenConfiguration accessTokenConfiguration) {
        HttpEntity<String> entity = new HttpEntity<>(createHeaders(accessTokenConfiguration));
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        return response.getBody();
    }

}
