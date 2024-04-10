package uoa.nightingales.aiservicenode;

import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.boot.test.context.SpringBootTest;
import uoa.nightingales.aiservicenode.services.ChatGptYoutubeRecommendService;

@Slf4j
@SpringBootTest
class AiServiceNodeApplicationTests {

    @Resource
    private OpenAiChatClient openAiChatClient;

    @Resource
    private ChatGptYoutubeRecommendService chatGptYoutubeRecommendService;

    @Test
    void contextLoads() {
    }

    @Test
    void test1(){

        System.out.println(chatGptYoutubeRecommendService.getUserInputRelevantCategory("i want to watch videos that about future technology"));


    }

}
