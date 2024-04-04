package uoa.nightingales.youtubeservicenode.pojos;


import lombok.Data;

@Data
public class Video {

    private String videoId;
    private String title;
    private String description;
    private String coverImgUrl;
    private String publishedAt;
    private Channel channel;
    private String videoUrl;
}
