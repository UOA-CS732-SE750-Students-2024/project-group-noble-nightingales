import "./YouTubeCSS/YoutubePage.css";
import { useState } from "react";

const YoutubePage = () => {
  let [AIRecommandation, setAIRecommandation] = useState(
    "Simply describe what you want in natural language, and our AI will bring you videos that match your interests!"
  );
  let [AIFiltering, setAIFiltering] = useState(
    "Simply describe what you do not want in natural language, and our AI will not bring you videos that match the categories!"
  );
  let [Search, setSearch] = useState("search Video, Channel");
  return (
    <div className="youtube-page">
      <img className="style-icon" alt="" src="/style.svg" />
      <div className="explore-categories">
        <div className="youtube-videos-for-you-parent">
          <div className="youtube-videos-for"> YouTube Videos For You</div>
          <div className="see-all-wrapper">
            <div className="see-all">See All</div>
          </div>
        </div>
      </div>
      <div className="feature-bid">
        <div className="feature-bid-child" />
        <div className="feature-bid-item" />
        <div className="feature-bid-inner" />
        <div className="group-div">
          <div className="group-parent">
            <div className="group-wrapper">
              <div className="group-parent">
                <div className="group-parent">
                  <div className="group-parent" />
                </div>
              </div>
            </div>
            <div className="embedded-ai-recommendation-parent">
              <div className="embedded-ai-recommendation">
                Embedded AI Recommendation
              </div>
              <div className="embedded-ai-recommendation">
                Embedded AI Recommendation
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-header">
        <div className="header">
          <div className="header-child" />
          <div className="header-inner">
            <div className="frame-wrapper">
              <div className="frame-container">
                <div className="explore-parent">
                  <button className="explore">Explore</button>
                  <button className="explore">YouTube</button>
                  <button className="explore">Spotify</button>
                  <button className="explore">Community</button>
                </div>
              </div>
            </div>
          </div>
          <div className="header-item" />
          <button className="welcome-james">Welcome James</button>
          <button className="avatar" />
        </div>
        <div className="ellipse-parent">
          <div className="group-child" />
          <div className="start-exploring-wrapper">
            <div className="start-exploring">Start Exploring</div>
          </div>
        </div>
      </div>
      <div className="uoa-media-wrapper">
        <b className="uoa-media">
          <p className="uoa-media1">UoA Media</p>
        </b>
      </div>
      <img className="layers-icon" alt="" src="/-layers@2x.png" />
      <img
        className="vuesaxlineararrow-right-icon"
        alt=""
        src="/vuesaxlineararrowright.svg"
      />
      <button className="image-277" />
      <button className="image-287" />
      <button className="image-288" />
      <button className="image-289" />
      <button className="image-290" />
      <div className="most-popular-videos">Most Popular Videos</div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <input
        className="youtube-page-child"
        placeholder={Search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <img className="youtube-page-item" alt="" src="/rectangle-3@2x.png" />
      <img className="path-1929-icon" alt="" src="/path-1929.svg" />
      <img className="path-1929-icon1" alt="" src="/path-1929.svg" />
      <form>
        <input
          className="form"
          value={AIRecommandation}
          placeholder={AIRecommandation}
          type="text"
          onChange={(e) => setAIRecommandation(e.target.value)}
        />
        <button className="send-wrapper">
          <div className="send">Send</div>
        </button>
      </form>

      <form>
        <input
          className="form1"
          value={AIFiltering}
          placeholder={AIFiltering}
          type="text"
          onChange={(e) => setAIFiltering(e.target.value)}
        />

        <button className="send-container">
          <div className="send">Send</div>
        </button>
      </form>

      <div className="task">
        <div className="bg" />
        <div className="icon-group">
          <div className="attachments" />
        </div>
        <div className="value">Interests Found:</div>
        <img className="icon" alt="" src="/icon.svg" />
        <div className="progress" />
        <div className="user-group">
          <div className="div">26</div>
        </div>
        <div className="title">
          <img className="user-icon" alt="" src="/user.svg" />
          <b className="label">AI Recommendation</b>
        </div>
      </div>
      <div className="task1">
        <div className="bg1" />
        <div className="icon-group1">
          <div className="attachments1" />
          <div className="tasks">
            <img className="icon1" alt="" />
          </div>
        </div>
        <img className="icon2" alt="" src="/icon.svg" />
        <div className="progress1" />
        <div className="user-group1">
          <div className="div1">10</div>
        </div>
        <div className="title1">
          <img className="user-icon" alt="" src="/artboard.svg" />
          <b className="label">AI Filtering</b>
        </div>
        <div className="categories-blocked">Categories Blocked:</div>
      </div>
      <div className="weird-youtube-video">Weird YouTube Video</div>
      <div className="weird-youtube-video1">
        Weird YouTube Video - James Gong
      </div>
      <div className="weird-youtube-video2">
        Weird YouTube Video - James Gong
      </div>
      <div className="weird-youtube-video3">
        Weird YouTube Video - James Gong
      </div>
      <div className="weird-youtube-video4">
        Weird YouTube Video - James Gong
      </div>
      <div className="made-by-james">Made By James Gong</div>
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="youtube-page-inner" alt="" src="/polygon-1.svg" />
      <button className="image-291" />
      <div className="weird-youtube-video5">Weird YouTube Video</div>
      <div className="made-by-james1">Made By James Gong</div>
      <img className="vector-icon2" alt="" src="/vector1.svg" />
      <img className="polygon-icon" alt="" src="/polygon-1.svg" />
      <button className="image-292" />
      <div className="weird-youtube-video6">Weird YouTube Video</div>
      <div className="made-by-james2">Made By James Gong</div>
      <img className="vector-icon3" alt="" src="/vector1.svg" />
      <img className="youtube-page-child1" alt="" src="/polygon-1.svg" />
      <button className="image-293" />
      <div className="weird-youtube-video7">Weird YouTube Video</div>
      <div className="made-by-james3">Made By James Gong</div>
      <img className="vector-icon4" alt="" src="/vector1.svg" />
      <img className="youtube-page-child2" alt="" src="/polygon-1.svg" />
      <button className="image-302" />
      <div className="weird-youtube-video8">Weird YouTube Video</div>
      <div className="made-by-james4">Made By James Gong</div>
      <img className="vector-icon5" alt="" src="/vector1.svg" />
      <img className="youtube-page-child3" alt="" src="/polygon-1.svg" />
      <button className="image-303" />
      <div className="weird-youtube-video9">Weird YouTube Video</div>
      <div className="made-by-james5">Made By James Gong</div>
      <img className="vector-icon6" alt="" src="/vector1.svg" />
      <img className="youtube-page-child4" alt="" src="/polygon-1.svg" />
      <button className="image-304" />
      <div className="weird-youtube-video10">Weird YouTube Video</div>
      <div className="made-by-james6">Made By James Gong</div>
      <img className="vector-icon7" alt="" src="/vector1.svg" />
      <img className="youtube-page-child5" alt="" src="/polygon-1.svg" />
      <button className="image-305" />
      <div className="weird-youtube-video11">Weird YouTube Video</div>
      <div className="made-by-james7">Made By James Gong</div>
      <img className="vector-icon8" alt="" src="/vector1.svg" />
      <img className="youtube-page-child6" alt="" src="/polygon-1.svg" />
      <button className="image-294" />
      <div className="weird-youtube-video12">Weird YouTube Video</div>
      <div className="made-by-james8">Made By James Gong</div>
      <img className="vector-icon9" alt="" src="/vector1.svg" />
      <img className="youtube-page-child7" alt="" src="/polygon-1.svg" />
      <button className="image-295" />
      <div className="weird-youtube-video13">Weird YouTube Video</div>
      <div className="made-by-james9">Made By James Gong</div>
      <img className="vector-icon10" alt="" src="/vector1.svg" />
      <img className="youtube-page-child8" alt="" src="/polygon-1.svg" />
      <button className="image-296" />
      <div className="weird-youtube-video14">Weird YouTube Video</div>
      <div className="made-by-james10">Made By James Gong</div>
      <img className="vector-icon11" alt="" src="/vector1.svg" />
      <img className="youtube-page-child9" alt="" src="/polygon-1.svg" />
      <button className="image-297" />
      <div className="weird-youtube-video15">Weird YouTube Video</div>
      <div className="made-by-james11">Made By James Gong</div>
      <img className="vector-icon12" alt="" src="/vector1.svg" />
      <img className="youtube-page-child10" alt="" src="/polygon-1.svg" />
      <button className="image-298" />
      <div className="weird-youtube-video16">Weird YouTube Video</div>
      <div className="made-by-james12">Made By James Gong</div>
      <img className="vector-icon13" alt="" src="/vector1.svg" />
      <img className="youtube-page-child11" alt="" src="/polygon-1.svg" />
      <button className="image-299" />
      <div className="weird-youtube-video17">Weird YouTube Video</div>
      <div className="made-by-james13">Made By James Gong</div>
      <img className="vector-icon14" alt="" src="/vector1.svg" />
      <img className="youtube-page-child12" alt="" src="/polygon-1.svg" />
      <button className="image-300" />
      <div className="weird-youtube-video18">Weird YouTube Video</div>
      <div className="made-by-james14">Made By James Gong</div>
      <img className="vector-icon15" alt="" src="/vector1.svg" />
      <img className="youtube-page-child13" alt="" src="/polygon-1.svg" />
      <button className="image-301" />
      <div className="weird-youtube-video19">Weird YouTube Video</div>
      <div className="made-by-james15">Made By James Gong</div>
      <img className="vector-icon16" alt="" src="/vector1.svg" />
      <img className="youtube-page-child14" alt="" src="/polygon-1.svg" />
      <div className="ellipse-div" />
      <img className="youtube-page-child15" alt="" src="/polygon-17.svg" />
      <div className="youtube-page-child16" />
      <img className="youtube-page-child17" alt="" src="/polygon-17.svg" />
      <div className="youtube-page-child18" />
      <img className="youtube-page-child19" alt="" src="/polygon-17.svg" />
      <div className="youtube-page-child20" />
      <img className="youtube-page-child21" alt="" src="/polygon-17.svg" />
      <div className="youtube-page-child22" />
      <img className="youtube-page-child23" alt="" src="/polygon-17.svg" />
      <div className="youtube-page-child24" />
      <img className="youtube-page-child25" alt="" src="/polygon-17.svg" />
      <div className="youtube-page-child26" />
      <img className="youtube-page-child27" alt="" src="/polygon-17.svg" />
      <div className="youtube-page-child28" />
      <img className="youtube-page-child29" alt="" src="/polygon-17.svg" />
      <img className="path-1929-icon" alt="" src="/path-1929.svg" />
    </div>
  );
};

export default YoutubePage;
