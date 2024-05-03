import "./YouTubePlayerCSS/YouTubePlayer.css";
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
