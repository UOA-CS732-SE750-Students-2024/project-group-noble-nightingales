import Player from "../../Components/SpotifyPlay/Player/Player";
import { Container } from "react-bootstrap"
import { getSpotifySignInUrl } from "../../Requests/Spotify/SpotifySignInRequest";


export const SpotifyPlay = ({accessToken, trackUri}) => {

    return (
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
          <div>
            <Player accessToken={accessToken} trackUri={trackUri} />
            <button onClick={getSpotifySignInUrl}>sign in</button>
          </div>
        </Container>
      )
}

export default SpotifyPlay;
