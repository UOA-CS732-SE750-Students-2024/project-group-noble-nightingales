package uoa.nightingales.youtubeservicenode.services;

import com.google.api.services.youtube.YouTube;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import uoa.nightingales.youtubeservicenode.domains.VideosResponse;
import uoa.nightingales.youtubeservicenode.utils.ResponseParser;

import java.io.IOException;

@Slf4j
@Service("popularVideoFetchService")
@RequiredArgsConstructor
public class PopularVideoFetchServiceImpl implements PopularVideoFetchService{

    @Value("${youtube.api.key}")
    private String apiKey;


    final YouTube youtube;

    @Override
    public VideosResponse getPopularVideos(long maxResult, String pageToken) throws IOException {
        log.info("generating request to generally retrieve popular videos");
        YouTube.Videos.List request = youtube.videos().list("snippet,contentDetails,statistics")
                .setChart("mostPopular")
                .setMaxResults(maxResult)
                .setRegionCode("US")
                .setKey(apiKey);

        if(pageToken != null && !pageToken.isEmpty()) {
            request.setPageToken(pageToken);
        }

        return ResponseParser.parse(request.execute());
    }

    @Override
    public VideosResponse getPopularVideosBySearch(String query, long maxResult, String pageToken) throws IOException {
        YouTube.Search.List search = youtube.search().list("id,snippet");
        log.info("generating video search request based on popularity, query: " + query);
        search.setKey(apiKey);
        search.setMaxResults(maxResult);
        search.setType("video");
        search.setOrder("viewCount");
        search.setRelevanceLanguage("en");

        if (query != null && !query.isEmpty()) {
            search.setQ(query);
        }

        if (pageToken != null && !pageToken.isEmpty()) {
            search.setPageToken(pageToken);
        }

        return ResponseParser.parse(search.execute());
    }
}
