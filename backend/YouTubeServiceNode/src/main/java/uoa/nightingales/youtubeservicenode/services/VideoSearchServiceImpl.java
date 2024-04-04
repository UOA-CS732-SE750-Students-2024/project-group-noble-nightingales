package uoa.nightingales.youtubeservicenode.services;

import com.google.api.services.youtube.YouTube;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import uoa.nightingales.youtubeservicenode.domains.VideosResponse;
import uoa.nightingales.youtubeservicenode.utils.ResponseParser;

import java.io.IOException;

@Slf4j
@Service("videoSearchService")
public class VideoSearchServiceImpl implements VideoSearchService{

    @Value("${youtube.api.key}")
    private String apiKey;

    @Resource
    private YouTube youtube;

    @Override
    public VideosResponse searchVideos(String query, long maxResults, String pageToken) throws IOException {
        YouTube.Search.List search = youtube.search().list("id,snippet");
        log.info("generating video search request based on relevance, query: " + query);
        search.setKey(apiKey);
        search.setQ(query);
        search.setType("video");
        search.setMaxResults(maxResults);
        search.setRelevanceLanguage("en");
        if (pageToken != null && !pageToken.isEmpty()) {
            search.setPageToken(pageToken);
        }
        return ResponseParser.parse(search.execute());
    }

    @Override
    public VideosResponse searchVideosByChannelId(String channelId, long maxResults, String pageToken) throws IOException {
        YouTube.Search.List search = youtube.search().list("id,snippet");
        log.info("generating video search query based on channel ID, ID: " + channelId);
        search.setKey(apiKey);
        search.setChannelId(channelId);
        search.setType("video");
        search.setMaxResults(maxResults);
        search.setRelevanceLanguage("en");
        if (pageToken != null && !pageToken.isEmpty()) {
            search.setPageToken(pageToken);
        }
        return ResponseParser.parse(search.execute());
    }

    @Override
    public VideosResponse searchVideosOrderedByDate(String query, long maxResults, String pageToken) throws IOException {
        YouTube.Search.List search = youtube.search().list("id,snippet");
        log.info("generating video search request based on date, query: " + query);
        search.setKey(apiKey);
        search.setQ(query);
        search.setOrder("date");
        search.setType("video");
        search.setMaxResults(maxResults);
        search.setRelevanceLanguage("en");
        if (pageToken != null && !pageToken.isEmpty()) {
            search.setPageToken(pageToken);
        }
        return ResponseParser.parse(search.execute());
    }
}
