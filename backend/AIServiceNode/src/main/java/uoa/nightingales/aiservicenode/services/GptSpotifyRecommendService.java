package uoa.nightingales.aiservicenode.services;

import java.util.List;

public interface GptSpotifyRecommendService {

    String getSpotifySearchText(String userInput);

    List<String> getUnwantedSpotifyCreators(String userInput);
}
