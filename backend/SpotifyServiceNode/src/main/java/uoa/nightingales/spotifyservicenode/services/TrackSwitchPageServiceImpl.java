package uoa.nightingales.spotifyservicenode.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import uoa.nightingales.spotifyservicenode.configs.AccessTokenConfiguration;
import uoa.nightingales.spotifyservicenode.domains.SpotifyResponse;
import uoa.nightingales.spotifyservicenode.pojos.TrackInfo;
import uoa.nightingales.spotifyservicenode.utils.RequestFactory;
import uoa.nightingales.spotifyservicenode.utils.ResponseParser;

@Service("trackSwitchPageServiceImpl")
@RequiredArgsConstructor
public class TrackSwitchPageServiceImpl implements SwitchPageService<TrackInfo>{

    final RestTemplate restTemplate;

    final AccessTokenConfiguration accessTokenConfiguration;

    @Override
    public SpotifyResponse<TrackInfo> switchPage(String pageUrl) throws JsonProcessingException {
        return ResponseParser.parseTrackResponseString(RequestFactory.makeRequest(pageUrl, restTemplate, accessTokenConfiguration));
    }
}
