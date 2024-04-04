package uoa.nightingales.youtubeservicenode.services;

import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.SearchListResponse;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import uoa.nightingales.youtubeservicenode.pojos.Video;
import uoa.nightingales.youtubeservicenode.utils.ResponseParser;

import java.io.IOException;
import java.util.List;

@Service("videoSearchService")
public class VideoSearchServiceImpl implements VideoSearchService{

    @Value("${youtube.api.key}")
    private String apiKey;

    @Resource
    private YouTube youtube;

    @Override
    public List<Video> searchVideos(String query, long maxResults, String pageToken) throws IOException {
        YouTube.Search.List search = youtube.search().list("id,snippet");
        search.setKey(apiKey);
        search.setQ(query);
        search.setType("video");
        search.setMaxResults(maxResults);
        if (pageToken != null && !pageToken.isEmpty()) {
            search.setPageToken(pageToken);
        }
        return ResponseParser.parse(search.execute());
    }

    @Override
    public List<Video> searchVideosByChannelId(String channelId, long maxResults, String pageToken) throws IOException {
        YouTube.Search.List search = youtube.search().list("id,snippet");
        search.setKey(apiKey);
        search.setChannelId(channelId);
        search.setType("video");
        search.setMaxResults(maxResults);
        if (pageToken != null && !pageToken.isEmpty()) {
            search.setPageToken(pageToken);
        }
        return ResponseParser.parse(search.execute());
    }
}
