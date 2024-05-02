import "./YouTubeRowCSS/YouTubeRow.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import YouTubeCover from "../../../assets/YouTubeCover.png";
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
        {videos.map((video) => (
          <li className="videoListElement" key={video.name}>
            <NavLink to="/youtube/player">
              <img
                className="videoImage"
                src={video.imageURL}
                alt={video.name}
              />
            </NavLink>
            <div className="videoInfo-container">
              <PlayArrowIcon className="playArrow" />
              <div className="videoInfo">
                <span style={{ fontSize: "1.9vh" }}>{video.name}</span>
                <span style={{ fontSize: "1.6vh", color: "gray" }}>
                  Made By {video.author}
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
      <h2>YouTube Videos For You</h2>
      <NavLink className="navigationAllLink" to="/youtube">
        See All
      </NavLink>
      {renderVideoList(dummyTopVideos)}
      {renderVideoList(dummyTopVideos)}
    </div>
  );
}
