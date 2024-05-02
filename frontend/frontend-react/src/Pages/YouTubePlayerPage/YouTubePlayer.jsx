import "./YouTubePlayerCSS/YouTubePlayer.css";
import BallDynamic from "../../Components/BallDynamic/Ball";
import YouTubePlayerRow from "../../Components/YouTube/YouTubePlayerRow/YouTubePlayerRow";

export default function YouTubePlayer() {
  return (
    <div>
      {/* <BallDynamic /> */}
      <div className="YouTubePlayer-container">
        <div>
          <YouTubePlayerRow />
        </div>
      </div>
    </div>
  );
}
