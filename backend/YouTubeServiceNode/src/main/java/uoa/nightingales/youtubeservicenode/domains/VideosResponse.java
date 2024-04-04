package uoa.nightingales.youtubeservicenode.domains;

import lombok.AllArgsConstructor;
import lombok.Data;
import uoa.nightingales.youtubeservicenode.pojos.Video;

import java.util.List;

@Data
@AllArgsConstructor
public class VideosResponse {

    private String prevPageToken;

    private String nextPageToken;

    private List<Video> videoList;

}
