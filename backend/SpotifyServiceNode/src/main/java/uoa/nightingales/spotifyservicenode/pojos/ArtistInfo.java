package uoa.nightingales.spotifyservicenode.pojos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ArtistInfo implements Popularable{

    private String artistId;
    private String name;
    private String artistUrl;
    private Integer numOfFollowers;
    private Integer popularity;
    private String imageUrl;
    private List<String> genres;

}
