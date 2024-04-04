package uoa.nightingales.youtubeservicenode.utils;

import com.google.api.services.youtube.model.SearchListResponse;
import com.google.api.services.youtube.model.SearchResult;
import uoa.nightingales.youtubeservicenode.pojos.Video;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class ResponseParser {

    public static List<Video> parse(SearchListResponse response){
        List<SearchResult> items = response.getItems();

        return items.stream().map(searchResult -> {
            Video video = new Video();
            video.setVideoId(searchResult.getId().getVideoId());
            video.setTitle(searchResult.getSnippet().getTitle());
            video.setDescription(searchResult.getSnippet().getDescription());
            video.setThumbnailUrl(searchResult.getSnippet().getThumbnails().getDefault().getUrl());
            video.setPublishedAt(searchResult.getSnippet().getPublishedAt().toStringRfc3339());
            video.setChannelName(searchResult.getSnippet().getChannelTitle());
            video.setChannelId(searchResult.getSnippet().getChannelId());
            return video;
        }).toList();
    }

}
