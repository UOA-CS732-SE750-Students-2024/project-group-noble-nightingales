package uoa.nightingales.youtubeservicenode.utils;

import com.google.api.services.youtube.model.SearchListResponse;
import com.google.api.services.youtube.model.SearchResult;
import com.google.api.services.youtube.model.VideoListResponse;
import uoa.nightingales.youtubeservicenode.domains.VideosResponse;
import uoa.nightingales.youtubeservicenode.pojos.Channel;
import uoa.nightingales.youtubeservicenode.pojos.Video;

import java.util.List;

@SuppressWarnings("all")
public class ResponseParser {

    public static VideosResponse parse(SearchListResponse response){
        List<SearchResult> items = response.getItems();

        List<Video> list = items.stream().map(searchResult -> {
            Video video = new Video();
            video.setVideoId(searchResult.getId().getVideoId());
            video.setTitle(searchResult.getSnippet().getTitle());
            video.setDescription(searchResult.getSnippet().getDescription());
            video.setCoverImgUrl(searchResult.getSnippet().getThumbnails().getDefault().getUrl());
            video.setPublishedAt(searchResult.getSnippet().getPublishedAt().toStringRfc3339());
            video.setChannel(new Channel(searchResult.getSnippet().getChannelTitle(), searchResult.getSnippet().getChannelId()));
            video.setVideoUrl("https://www.youtube.com/embed/" + video.getVideoId());
            return video;
        }).toList();

        return new VideosResponse(response.getPrevPageToken(), response.getNextPageToken(), list);
    }

    public static VideosResponse parse(VideoListResponse response){
        List<com.google.api.services.youtube.model.Video> items = response.getItems();

        List<Video> list = items.stream().map(video -> {
            Video videoData = new Video();
            videoData.setVideoId(video.getId());
            videoData.setTitle(video.getSnippet().getTitle());
            videoData.setDescription(video.getSnippet().getDescription());
            videoData.setCoverImgUrl(video.getSnippet().getThumbnails().getDefault().getUrl());
            videoData.setPublishedAt(video.getSnippet().getPublishedAt().toStringRfc3339());
            videoData.setChannel(new Channel(video.getSnippet().getChannelTitle(), video.getSnippet().getChannelId()));
            videoData.setVideoUrl("https://www.youtube.com/embed/" + videoData.getVideoId());
            return videoData;
        }).toList();

        return new VideosResponse(response.getPrevPageToken(), response.getNextPageToken(), list);
    }


}
