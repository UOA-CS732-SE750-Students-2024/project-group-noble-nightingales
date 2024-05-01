import "./YouTubeRowCSS/YouTubeRow.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import YouTubeCover from "../../../assets/YouTubeCover.png";
import StatsIcon from "../../../assets/StatsIcon.png";
import { NavLink } from "react-router-dom";

export default function YouTubeRow() {
  // Might need to refactor dummy data lists alongside subsequent <li> components to reduce code duplication
  const dummyTopVideos = [
    {
      imageURL: YouTubeCover,
      name: "Starcraft1",
      author: "Peter Wang",
    },
    {
      imageURL: YouTubeCover,
      name: "Starcraft2",
      author: "Peter Wang",
    },
    {
      imageURL: YouTubeCover,
      name: "Starcraft3",
      author: "Peter Wang",
    },
    {
      imageURL: YouTubeCover,
      name: "Starcraft4",
      author: "Peter Wang",
    },
  ];

  // Function to render the video list
  const renderVideoList = (videos) => {
    return (
      <ul className="videoList">
        {videos.map((topVideo) => (
          <li className="videoListElement" key={topVideo.name}>
            <NavLink to="/youtube">
              <img
                className="videoImage"
                src={topVideo.imageURL}
                alt={topVideo.name}
              />
            </NavLink>
            <div className="videoInfo-container">
              <PlayArrowIcon className="playArrow" />
              <div className="videoInfo">
                <span style={{ fontSize: "1.9vh" }}>{topVideo.name}</span>
                <span style={{ fontSize: "1.6vh", color: "gray" }}>
                  Made By {topVideo.author}
                </span>
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
      {renderVideoList(dummyTopVideos)}
      {renderVideoList(dummyTopVideos)}
      {renderVideoList(dummyTopVideos)}
    </div>
  );
}
