package uoa.nightingales.spotifyservicenode.domains;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FinalSpotifyAuthenticationResponse {

    private String accessToken;
    private String refreshToken;

}
