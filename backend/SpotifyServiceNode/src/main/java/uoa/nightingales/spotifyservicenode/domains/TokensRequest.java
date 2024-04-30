package uoa.nightingales.spotifyservicenode.domains;

import lombok.Data;

@Data
public class TokensRequest {

    private String accessToken;

    private String refreshToken;
}
