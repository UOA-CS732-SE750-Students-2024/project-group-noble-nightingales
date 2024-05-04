package uoa.nightingales.aiservicenode.services;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@RequiredArgsConstructor
@PropertySource("classpath:/Keywords/prompt.properties")
@Service("gptSpotifyRecommendService")
public class GptSpotifyRecommendServiceImpl implements GptSpotifyRecommendService{

    final OpenAiChatClient openAiChatClient;

    @Value("${spotify_search}")
    private String recommendPrompt;

    @Value("${spotify_filter}")
    private String filterPrompt;

    @Override
    public String getSpotifySearchText(String userInput) {
        String message = String.format("%s %s", userInput, recommendPrompt);
        return openAiChatClient.call(message);
    }

    @Override
    public List<String> getUnwantedSpotifyCreators(String userInput) {
        String message = String.format("%s %s", userInput, filterPrompt);
        String response = openAiChatClient.call(message);
        return Arrays.stream(response.split(",")).toList();
    }
}
