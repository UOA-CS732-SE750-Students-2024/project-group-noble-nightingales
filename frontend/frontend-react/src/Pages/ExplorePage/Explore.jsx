import "./ExploreCSS/Explore.css";
import BallDynamic from "../../Components/BallDynamic/Ball";
import IntroRow from "../../Components/Explore/IntroRow/IntroRow";
import PictureRow from "../../Components/Explore/PictureSecondRow/PictureRow";
import AIRow from "../../Components/Explore/AIRow/AIRow";
import YouTubeRow from "../../Components/Explore/YouTubeRow/YouTubeRow";
import SpotifyRow from "../../Components/Explore/SpotifyRow/SpotifyRow";
import SubRow from "../../Components/Explore/SubscribeRow/SubscribeRow";
import BallStatic from "../../Components/BallStatic/Ball";
import { Outlet } from "react-router-dom";

export default function Explore() {
  return (
    <div>
      <BallDynamic />
      <div className="Explore-container">
        <div data-testid="intro-row">
          <IntroRow />
        </div>
        <div data-testid="picture-row">
          <PictureRow />
        </div>
        <div className="embeddAIContainer" data-testid="ai-row">
          <BallStatic />
          <AIRow />
        </div>
        <div data-testid="explore-youtube-row">
          <YouTubeRow />
        </div>
        <div
          className="popularTrackContainer"
          data-testid="explore-spotify-row"
        >
          <BallStatic />
          <SpotifyRow />
        </div>
        <div className="subscribeContianer" data-testid="sub-row">
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
