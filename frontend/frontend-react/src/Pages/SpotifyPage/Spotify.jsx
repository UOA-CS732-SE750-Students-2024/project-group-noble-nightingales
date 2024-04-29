import "./SpotifyCSS/Spotify.css";
import SearchTopRow from "../../Components/Spotify/SearchTopRow/SearchTopRow";
import RecommendationRow from "../../Components/Spotify/RecommendationRow/RecommendationRow";
import AIRecommendationRow from "../../Components/Spotify/AIRecommendationRow/AIRecommendationRow";
import BallDynamic from "../../Components/BallDynamic/Ball";
import SpotifyRow from "../../Components/Explore/SpotifyRow/SpotifyRow";

export default function Spotify() {
  return (
    <div>
      {/* <BallDynamic /> */}
      <div className="Spotify-container">
        <div>
          <SearchTopRow />
        </div>
        <div>
          <RecommendationRow />
        </div>
        <div>
          <AIRecommendationRow />
        </div>
        <div>
          <SpotifyRow />
        </div>
      </div>
    </div>
  );
}
