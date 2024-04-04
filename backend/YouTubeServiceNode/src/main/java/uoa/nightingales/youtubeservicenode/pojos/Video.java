package uoa.nightingales.youtubeservicenode.pojos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class Video {

    private String videoId;
    private String title;
    private String description;
    private String thumbnailUrl;
    private String publishedAt;
    private String channelName;
    private String channelId;
}
