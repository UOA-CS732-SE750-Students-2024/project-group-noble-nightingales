package uoa.nightingales.spotifyservicenode.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import uoa.nightingales.spotifyservicenode.configs.AccessTokenConfiguration;
import uoa.nightingales.spotifyservicenode.domains.SpotifyResponse;
import uoa.nightingales.spotifyservicenode.pojos.ArtistInfo;
import uoa.nightingales.spotifyservicenode.utils.RequestFactory;
import uoa.nightingales.spotifyservicenode.utils.ResponseParser;

@Service("artistSwitchPageService")
@RequiredArgsConstructor
public class ArtistSwitchPageServiceImpl implements SwitchPageService<ArtistInfo>{

    final RestTemplate restTemplate;

    final AccessTokenConfiguration accessTokenConfiguration;

    @Override
    public SpotifyResponse<ArtistInfo> switchPage(String pageUrl) throws JsonProcessingException {
        return ResponseParser.parseArtistResponseString(RequestFactory.makeRequest(pageUrl, restTemplate, accessTokenConfiguration));
    }
}
