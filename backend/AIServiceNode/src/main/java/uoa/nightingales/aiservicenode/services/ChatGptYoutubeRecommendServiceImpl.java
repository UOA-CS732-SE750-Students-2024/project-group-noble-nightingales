package uoa.nightingales.aiservicenode.services;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Slf4j
@PropertySources({
        @PropertySource("classpath:/Keywords/category.properties"),
        @PropertySource("classpath:/Keywords/prompt.properties")
})
@RequiredArgsConstructor
@Service("chatGptYoutubeRecommendService")
public class ChatGptYoutubeRecommendServiceImpl implements ChatGptYoutubeRecommendService{


    final OpenAiChatClient openAiChatClient;


    @Value("#{'${categories.news}'.split(', ')}")
    private List<String> newsCategories;

    @Value("#{'${categories.entertainment}'.split(', ')}")
    private List<String> entertainmentCategories;

    @Value("#{'${categories.lifestyle}'.split(', ')}")
    private List<String> lifestyleCategories;

    @Value("#{'${categories.sports}'.split(', ')}")
    private List<String> sportsCategories;

    @Value("#{'${categories.gaming}'.split(', ')}")
    private List<String> gamingCategories;

    @Value("#{'${categories.education}'.split(', ')}")
    private List<String> educationCategories;

    @Value("#{'${categories.culture}'.split(', ')}")
    private List<String> cultureCategories;

    @Value("#{'${categories.business}'.split(', ')}")
    private List<String> businessCategories;

    @Value("#{'${categories.miscellaneous}'.split(', ')}")
    private List<String> miscellaneousCategories;

    @Value("${relevant}")
    private String relevantPrompt;

    @Value("${not_relevant}")
    private String notRelevantPrompt;

    @Value("${youtube_desc}")
    private String youtubeDescPrompt;


    private String allCategories;

    @PostConstruct
    public void init() {
        allCategories = Stream.of(
                        newsCategories,
                        entertainmentCategories,
                        lifestyleCategories,
                        sportsCategories,
                        gamingCategories,
                        educationCategories,
                        cultureCategories,
                        businessCategories,
                        miscellaneousCategories
                ).flatMap(List::stream)
                .collect(Collectors.joining(", ")); // Join them with comma and space
    }

    @Override
    public List<String> getUserInputRelevantCategory(String userInput) {
        log.info("");
        // Combine userInput with the relevant prompt and all categories
        String message = String.format("%s %s %s", allCategories, userInput, notRelevantPrompt);
            // Send the request to OpenAI's ChatGPT and get the response
        String response = openAiChatClient.call(message);
        // Split 'response' into an array of strings using comma as the separator
        String[] responseArray = response.split(",");

        return new ArrayList<>(Arrays.asList(responseArray));

    }

    @Override
    public List<String> getUserInputNotRelevantCategory(String userInput) {
        log.info("");
        // Combine userInput with the relevant prompt and all categories
        String message = String.format("%s %s %s", allCategories, userInput, youtubeDescPrompt);
        // Send the request to OpenAI's ChatGPT and get the response
        String response = openAiChatClient.call(message);
        // Split 'response' into an array of strings using comma as the separator
        String[] responseArray = response.split(",");

        return new ArrayList<>(Arrays.asList(responseArray));
    }

    @Override
    public List<String> getYoutubeRelevantCategory(String youtubeDesc) {
        log.info("");
        // Combine userInput with the relevant prompt and all categories
        String message = String.format("%s %s %s", allCategories, youtubeDesc, relevantPrompt);
        // Send the request to OpenAI's ChatGPT and get the response
        String response = openAiChatClient.call(message);
        // Split 'response' into an array of strings using comma as the separator
        String[] responseArray = response.split(",");

        return new ArrayList<>(Arrays.asList(responseArray));
    }
}
