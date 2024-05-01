import "./YouTubeCSS/YouTube.css";
import PopularRow from "../../Components/YouTube/PopularRow/PopularRow";
import AIRecommendationRow from "../../Components/Spotify/AIRecommendationRow/AIRecommendationRow";
import YouTubeRow from "../../Components/YouTube/YouTubeRow/YouTubeRow";

export default function YouTube() {
  return (
    <div>
      {/* <BallDynamic /> */}
      <div className="YouTube-container">
        <div>
          <PopularRow />
        </div>
        <div>
          <AIRecommendationRow />
        </div>
        <div>
          <YouTubeRow />
        </div>
      </div>
    </div>
  );
}
