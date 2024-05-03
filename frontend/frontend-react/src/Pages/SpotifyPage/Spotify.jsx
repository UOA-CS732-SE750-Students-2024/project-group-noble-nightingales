import "./SpotifyCSS/Spotify.css";
import SearchTopRow from "../../Components/Spotify/SearchTopRow/SearchTopRow";
import RecommendationRow from "../../Components/Spotify/RecommendationRow/RecommendationRow";
import AIRecommendationRow from "../../Components/Spotify/AIRecommendationRow/AIRecommendationRow";
import SpotifyRow from "../../Components/Spotify/SpotifyRow/SpotifyRow";
import BallDynamic from "../../Components/BallDynamic/Ball";
import BallStatic from "../../Components/BallStatic/Ball";
import SpotifyLoginDialog from "../../Dialogs/Spotify/SpotifyLoginDialog";
import Player from "../../Components/SpotifyPlay/Player/Player";
import { useState, useContext } from "react";
import { AuthContext } from "../../ApplicationContext";

const getTrackUri = (trackId) => {
  return `spotify:track:${trackId}`
}

export default function Spotify() {

  const {spotifyAccessToken, setSpotifyAccessToken} = useContext(AuthContext);

  const [currentTrack, setCurrentTrack] = useState("3FcUIVEdJEqBZfv3BY0ZjN")
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  return (
    <div>
      <BallDynamic />
      <div className="Spotify-container">
        <div>
          <SearchTopRow />
        </div>
        <div>
          <RecommendationRow />
        </div>
        <div className="AIRecommendationContainer">
          <AIRecommendationRow />
          <BallStatic />
        </div>
        <div className="SpotifyRowContainer">
          <SpotifyRow />
          <BallStatic />
        </div>
      </div>
      <SpotifyLoginDialog open={loginDialogOpen} handleClose={() => setLoginDialogOpen(false)}/>
      <Player trackUri={getTrackUri(currentTrack)} setLoginDialogOpen={setLoginDialogOpen}/>
    </div>
  );
}
