package uoa.nightingales.spotifyservicenode.domains;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpotifyResponse<T> {

    private String previousPage;
    private String nextPage;
    private List<T> data;

}
