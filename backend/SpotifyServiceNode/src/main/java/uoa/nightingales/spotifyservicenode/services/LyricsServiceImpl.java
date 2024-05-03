package uoa.nightingales.spotifyservicenode.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@RequiredArgsConstructor
@Service("lyricsService")
public class LyricsServiceImpl implements LyricsService{

    private final RestTemplate restTemplate;

    @Override
    public String getLyrics(String artist, String title) {
        String url = String.format("http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=%s&song=%s", artist, title);
        try {
            String response = restTemplate.getForObject(url, String.class);
            return response != null ? response : "Lyrics not found";
        } catch (Exception e) {
            return "Failed to fetch lyrics";
        }
    }
}
