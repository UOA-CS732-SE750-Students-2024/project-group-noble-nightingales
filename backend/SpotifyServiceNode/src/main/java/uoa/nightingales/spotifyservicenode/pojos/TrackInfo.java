package uoa.nightingales.spotifyservicenode.pojos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class TrackInfo implements Popularable {

    private String trackTitle;
    private String trackId;
    private String playUrl;
    private String coverImageUrl;
    private List<String> artistName;
    private List<String> artistUrl;
    private Integer popularity;
}
