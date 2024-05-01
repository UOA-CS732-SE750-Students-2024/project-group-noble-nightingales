import "./SpotifyCSS/Spotify.css";
import SearchTopRow from "../../Components/Spotify/SearchTopRow/SearchTopRow";
import RecommendationRow from "../../Components/Spotify/RecommendationRow/RecommendationRow";
import AIRecommendationRow from "../../Components/Spotify/AIRecommendationRow/AIRecommendationRow";
import SpotifyRow from "../../Components/Spotify/SpotifyRow/SpotifyRow";
import BallDynamic from "../../Components/BallDynamic/Ball";
import BallStatic from "../../Components/BallStatic/Ball";

export default function Spotify() {
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
    </div>
  );
}
