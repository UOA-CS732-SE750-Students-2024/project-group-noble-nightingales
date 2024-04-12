package uoa.nightingales.spotifyservicenode.domains;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpotifyAuthenticationResponse {

    private String url;
    private String state;
}
