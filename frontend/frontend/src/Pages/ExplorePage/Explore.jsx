import "./ExploreCSS/Explore.css";
import BallDynamic from "../../Components/BallDynamic/Ball";
import IntroRow from "../../Components/Explore/IntroRow/IntroRow";
import PictureRow from "../../Components/Explore/PictureSecondRow/PictureRow";
import AIRow from "../../Components/Explore/AIRow/AIRow";
import YoutubeRow from "../../Components/Explore/YoutubeRow/YoutubeRow";
import SpotifyRow from "../../Components/Explore/SpotifyRow/SpotifyRow";
import SubRow from "../../Components/Explore/SubscribeRow/SubscribeRow";
import BallStatic from "../../Components/BallStatic/Ball";
import { Outlet } from "react-router-dom";

export default function Explore() {
  return (
    <div>
      <BallDynamic />
      <div className="Explore-container">
        <div>
          <IntroRow />
        </div>
        <div className="pictureRowContainer">
          <PictureRow />
        </div>
        <div className="embeddAIContainer">
          <BallStatic />
          <AIRow />
        </div>
        <div className="exploreYoutubeCOn">
          <YoutubeRow />
        </div>
        <div className="popularTrackContainer">
          <BallStatic />
          <SpotifyRow />
        </div>
        <div className="subscribeContianer">
          <SubRow />
          <div className="subBall">
            <BallStatic />
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
