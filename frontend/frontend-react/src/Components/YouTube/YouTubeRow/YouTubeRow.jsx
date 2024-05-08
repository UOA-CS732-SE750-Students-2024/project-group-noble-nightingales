import "./YouTubeRowCSS/YouTubeRow.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StatsIcon from "../../../assets/StatsIcon.png";
import { NavLink } from "react-router-dom";

export default function YouTubeRow({videoResults}) {
  // Function to render the video list
  const renderVideoList = (videos) => {
    return (
      <ul className="videoList">
        {videos.map((video) => (
          <li className="videoListElement" key={video.videoId}>
            <NavLink to="/youtube/player">
              <img
                className="videoImage"
                src={video.
                  coverImgUrl}
                alt={video.title}
              />
            </NavLink>
            <div className="videoInfo-container">
              <PlayArrowIcon className="playArrow" />
              <div >
                <ul className="videoInfo">
                  <li>
                    <span className="videoTitle">{video.title}</span>
                  </li>
                  <li>     
                    <span style={{ fontSize: "1.6vh", color: "gray" }}>
                    Made By {video.channel.channelName}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="YouTubeRow-container">
      <h2>
        YouTube Videos For You
        <img
          src={StatsIcon}
          alt="Popular video star"
          style={{
            marginRight: "1vw",
            verticalAlign: "-1.2vh",
            marginLeft: "0.8vw",
          }}
        />
      </h2>
      {renderVideoList(videoResults.videoList)}
    </div>
  );
}
