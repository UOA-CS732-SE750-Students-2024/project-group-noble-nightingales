package uoa.nightingales.spotifyservicenode;

import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import uoa.nightingales.spotifyservicenode.configs.AccessTokenConfiguration;
import uoa.nightingales.spotifyservicenode.services.SearchService;

@SpringBootTest
class SpotifyServiceNodeApplicationTests {

    @Resource
    private AccessTokenConfiguration accessTokenConfiguration;

    @Resource
    private SearchService searchService;


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



}
