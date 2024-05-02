import "./YouTubePlayerRowCSS/YouTubePlayerRow.css";
import Star from "../../../assets/Star.png";
import YouTubeCover from "../../../assets/YouTubeCover.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChatIcon from "@mui/icons-material/Chat";
import Helen from "../../../assets/helen.jpg";
import { NavLink } from "react-router-dom";

export default function YouTubePlayerRow() {
  const dummyVideos = [
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
    {
      imageURL: YouTubeCover,
      name: "Starcraft5",
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
              <div className="videoInfo">
                <span style={{ fontSize: "1.9vh", marginLeft: "-1.2vw" }}>
                  {video.name}
                </span>
                <span
                  style={{
                    fontSize: "1.6vh",
                    color: "gray",
                    marginLeft: "-1.2vw",
                  }}
                >
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
    <div className="YouTubePlayerRow-container">
      <div className="left">
        <iframe
          src="https://www.youtube.com/embed/9hb_0TZ_MVI?rel=0"
          allowFullScreen
        />
        <div className="videoInfo-container">
          <h3>Video name</h3>
          <h5>
            <RemoveRedEyeIcon className="videoInfoIcon" />
            11,234
            <ChatIcon className="videoInfoIcon" style={{ marginLeft: "2vw" }} />
            11,234
          </h5>
          <div className="authorInfo-container">
            <img
              src={Helen}
              style={{
                width: "auto",
                height: "6vh",
                marginLeft: "1vw",
              }}
            />
            <div className="authorInfo">
              <h4>
                Helen
                <img
                  src={Star}
                  alt="Popular video star"
                  style={{
                    verticalAlign: "-0.6vh",
                    width: "1.5vw",
                    marginLeft: "0.5vw",
                  }}
                />
              </h4>
              <h5 style={{ marginLeft: "-1vw" }}>230,000 subscribers</h5>
            </div>
            <div className="videoDescription">
              <span>description...</span>
            </div>
          </div>
        </div>
        <div className="comment-container">
          <div className="commentTitle">
            <h3 style={{ marginTop: "1vh" }}>Comments</h3>
            <NavLink
              to="/youtube/player"
              style={{
                marginLeft: "45vw",
                marginTop: "-2vh",
                textDecoration: "none",
                color: "gray",
              }}
            >
              See More
            </NavLink>
          </div>
          {/* TODO: comment block */}
        </div>
      </div>
      <div className="right">
        <h2>
          Related Videos
          <img
            src={Star}
            alt="Popular video star"
            style={{
              verticalAlign: "-1.8vh",
              width: "3vw",
              marginLeft: "1vw",
            }}
          />
        </h2>
        {renderVideoList(dummyVideos)}
      </div>
    </div>
  );
}
