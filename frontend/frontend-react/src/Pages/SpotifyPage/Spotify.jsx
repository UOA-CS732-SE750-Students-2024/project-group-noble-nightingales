import "./SpotifyCSS/Spotify.css";
import SearchTopRow from "../../Components/Spotify/SearchTopRow/SearchTopRow";
import RecommendationRow from "../../Components/Spotify/RecommendationRow/RecommendationRow";
import AIRecommendationRow from "../../Components/Spotify/AIRecommendationRow/AIRecommendationRow";
import SpotifyRow from "../../Components/Spotify/SpotifyRow/SpotifyRow";
import SubRow from "../../Components/Explore/SubscribeRow/SubscribeRow";
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
        <div className="sideBall">
          <BallStatic />
        </div>
        <div className="sideBall2">
          <BallStatic />
        </div>
        <div className="AIRecommendation-container">
          <AIRecommendationRow />
          <BallStatic />
        </div>
        <div>
          <SpotifyRow />
        </div>
        <div>
          <SubRow />
          <div className="subBall">
            <BallStatic />
          </div>
        </div>
      </div>
    </div>
  );
}
