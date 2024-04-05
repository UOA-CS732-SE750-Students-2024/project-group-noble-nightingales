package uoa.nightingales.spotifyservicenode.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import uoa.nightingales.spotifyservicenode.domains.SpotifyResponse;
import uoa.nightingales.spotifyservicenode.pojos.ArtistInfo;
import uoa.nightingales.spotifyservicenode.pojos.TrackInfo;

import java.util.ArrayList;
import java.util.List;

public class ResponseParser {

    private static final ObjectMapper mapper = new ObjectMapper();

    public static SpotifyResponse<TrackInfo> parseTrackResponseString(String jsonString) throws JsonProcessingException {

        JsonNode rootNode = mapper.readTree(jsonString);
        SpotifyResponse<TrackInfo> response = new SpotifyResponse<>();

        // setting of the previous page and next page links
        response.setPreviousPage(rootNode.path("tracks").path("previous").asText(null));
        response.setNextPage(rootNode.path("tracks").path("next").asText(null));
        List<TrackInfo> trackInfoList = new ArrayList<>();
        JsonNode tracksNode = rootNode.path("tracks").path("items");

        // iterating through each track
        for (JsonNode trackNode : tracksNode){
            String trackId = trackNode.path("id").asText();
            String playUrl = trackNode.path("external_urls").path("spotify").asText();
            String coverImageUrl = trackNode.path("album").path("images").get(0).path("url").asText();
            String title = trackNode.path("name").asText();
            List<String> artistNames = new ArrayList<>();
            List<String> artistUrls = new ArrayList<>();
            Integer popularity = trackNode.path("popularity").asInt();

            for (JsonNode artistNode : trackNode.path("artists")) {
                artistNames.add(artistNode.path("name").asText());
                artistUrls.add(artistNode.path("external_urls").path("spotify").asText());
            }
            trackInfoList.add(new TrackInfo(title, trackId, playUrl, coverImageUrl, artistNames, artistUrls, popularity));
        }

        response.setData(trackInfoList);

        return response;
    }

    public static SpotifyResponse<ArtistInfo> parseArtistResponseString(String jsonString) throws JsonProcessingException {

        JsonNode rootNode = mapper.readTree(jsonString);

        List<ArtistInfo> artistInfoList = new ArrayList<>();
        JsonNode items = rootNode.path("artists").path("items");

        for (JsonNode item : items) {
            String artistId = item.path("id").asText();
            String name = item.path("name").asText();
            String artistUrl = item.path("external_urls").path("spotify").asText();
            Integer numOfFollowers = item.path("followers").path("total").asInt();
            Integer popularity = item.path("popularity").asInt();
            String imageUrl = !item.path("images").isEmpty() ? item.path("images").get(0).path("url").asText() : null;
            List<String> genres = new ArrayList<>();
            item.path("genres").forEach(genreNode -> genres.add(genreNode.asText()));
            artistInfoList.add(new ArtistInfo(artistId, name, artistUrl, numOfFollowers, popularity, imageUrl, genres));
        }

        String previousPage = rootNode.path("artists").path("previous").asText(null);
        String nextPage = rootNode.path("artists").path("next").asText(null);

        return new SpotifyResponse<>(previousPage, nextPage, artistInfoList);
    }

}
