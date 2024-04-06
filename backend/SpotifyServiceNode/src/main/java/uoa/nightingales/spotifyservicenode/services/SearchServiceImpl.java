package uoa.nightingales.spotifyservicenode.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import uoa.nightingales.spotifyservicenode.configs.AccessTokenConfiguration;
import uoa.nightingales.spotifyservicenode.domains.SpotifyResponse;
import uoa.nightingales.spotifyservicenode.pojos.ArtistInfo;
import uoa.nightingales.spotifyservicenode.pojos.TrackInfo;
import uoa.nightingales.spotifyservicenode.utils.RequestFactory;
import uoa.nightingales.spotifyservicenode.utils.ResponseParser;

@Slf4j
@Service("searchService")
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService{


    final AccessTokenConfiguration accessTokenConfiguration;

    final RestTemplate restTemplate;

    @Value("${spotify.baseUrl}")
    private String baseUrl;


    @Override
    public SpotifyResponse<TrackInfo> searchMusics(String query, int maxResults) throws JsonProcessingException {
        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(baseUrl + "/search")
                .queryParam("q", query)
                .queryParam("type", "track")
                .queryParam("limit", maxResults);

        return ResponseParser.parseTrackResponseString(RequestFactory.makeRequest(uriBuilder.toUriString(), restTemplate, accessTokenConfiguration));
    }


    @Override
    public SpotifyResponse<ArtistInfo> searchArtists(String query, int maxResults) throws JsonProcessingException {
        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(baseUrl + "/search")
                .queryParam("q", query)
                .queryParam("type", "artist")
                .queryParam("limit", maxResults);
        return ResponseParser.parseArtistResponseString(RequestFactory.makeRequest(uriBuilder.toUriString(), restTemplate, accessTokenConfiguration));
    }


}
