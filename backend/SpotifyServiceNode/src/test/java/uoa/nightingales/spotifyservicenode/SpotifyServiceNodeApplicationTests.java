package uoa.nightingales.spotifyservicenode;

import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import uoa.nightingales.spotifyservicenode.configs.AccessTokenConfiguration;
import uoa.nightingales.spotifyservicenode.services.LyricsService;
import uoa.nightingales.spotifyservicenode.services.SearchService;
import uoa.nightingales.spotifyservicenode.services.SpotifyAuthenticationService;

import static org.junit.jupiter.api.Assertions.fail;

@SpringBootTest
class SpotifyServiceNodeApplicationTests {

    @Resource
    private AccessTokenConfiguration accessTokenConfiguration;

    @Resource
    private SearchService searchService;

    @Resource
    private SpotifyAuthenticationService spotifyAuthenticationService;

    @Resource
    private LyricsService lyricsService;


    @Test
    void contextLoads() {
    }

    @Test
    void testAccessToken(){
        for(int i = 0; i < 5; i++){
            System.out.println(accessTokenConfiguration.getToken());
        }
    }

    @Test
    void testSearch() throws JsonProcessingException {
        System.out.println(searchService.searchMusics("See You Again", 1));
    }

    @Test
    void testResponseParser() throws JsonProcessingException {
        System.out.println(searchService.searchMusics("Jwawefy", 10));
    }

    @Test
    void testSearchArtists() throws JsonProcessingException {
        System.out.println(searchService.searchArtists("a", 3));
    }

    @Test
    void testWrongQuery() {
        String s = null;
        try {
            s = spotifyAuthenticationService.refreshAccessToken("123");
            System.out.println(s);
        } catch (JsonProcessingException e) {
            fail();
        } catch (Exception e){
            if(s == null){
                System.out.println("error occurred");
            }
        }
    }

    @Test
    void testLyrics(){
        String lyrics = lyricsService.getLyrics("Ed Sheeran", "Perfect");
        System.out.println(lyrics);
    }



}
