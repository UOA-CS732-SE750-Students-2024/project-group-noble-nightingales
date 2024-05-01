import "./YouTubeCSS/YouTube.css";
import PopularRow from "../../Components/YouTube/PopularRow/PopularRow";

export default function YouTube() {
  return (
    <div>
      {/* <BallDynamic /> */}
      <div className="YouTube-container">
        <div>
          <PopularRow />
        </div>
      </div>
    </div>
  );
}
