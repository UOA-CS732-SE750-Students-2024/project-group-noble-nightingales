package uoa.nightingales.aiservicenode;

import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.boot.test.context.SpringBootTest;
import uoa.nightingales.aiservicenode.services.ChatGptYoutubeRecommendService;
import uoa.nightingales.aiservicenode.services.GptSpotifyRecommendService;

@Slf4j
@SpringBootTest
class AiServiceNodeApplicationTests {



    @Resource
    private ChatGptYoutubeRecommendService chatGptYoutubeRecommendService;

    @Resource
    private GptSpotifyRecommendService gptSpotifyRecommendService;

    @Test
    void contextLoads() {
    }

    @Test
    void test1(){
        System.out.println(chatGptYoutubeRecommendService.getUserInputRelevantCategory("i want to watch videos that about future technology"));

    }

    @Test
    void testSpotifyPrompt(){
        System.out.println(gptSpotifyRecommendService.getSpotifySearchText(" I want to listen to music that is peaceful similar to Jay Chou"));
    }

    @Test
    void testSpotifyFilter(){
        System.out.println(gptSpotifyRecommendService.getUnwantedSpotifyCreators("I dont like musics from talo swift and jaychou"));
    }

}
