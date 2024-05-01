import "./YouTubeCSS/YouTube.css";
import PopularRow from "../../Components/YouTube/PopularRow/PopularRow";
import AIRecommendationRow from "../../Components/Spotify/AIRecommendationRow/AIRecommendationRow";
import YouTubeRow from "../../Components/YouTube/YouTubeRow/YouTubeRow";
import BallDynamic from "../../Components/BallDynamic/Ball";
import BallStatic from "../../Components/BallStatic/Ball";

export default function YouTube() {
  return (
    <div>
      <BallDynamic />
      <div className="YouTube-container">
        <div>
          <PopularRow />
        </div>
        <div className="AIRecommendationContainer">
          <AIRecommendationRow />
          <BallStatic />
        </div>
        <div>
          <YouTubeRow />
        </div>
      </div>
    </div>
  );
}
