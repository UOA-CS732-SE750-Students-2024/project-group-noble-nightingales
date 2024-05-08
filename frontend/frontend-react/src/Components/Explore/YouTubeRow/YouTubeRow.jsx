import "./YouTubeRowCSS/YouTubeRow.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getYouTubePopular } from "../../../Requests/Explore/YoutubeSpotifyRequest";
export default function YouTubeRow() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchTracks() {
      try {
        // const array = await getYouTubePopular();
        // setVideos(array);
        // console.log(array)
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      }
    }
    fetchTracks();
  }, []);

  // Function to render the video list
  const renderVideoList = (videos) => {
    return (
      <ul className="videoListt">
        {videos.map((video) => (
          <li className="videoListElement" key={video.videoId}>
            <NavLink to={`/youtube/player?videoUrl=${video.videoUrl}`}>
              <img
                className="videoImagee"
                src={video.coverImgUrl}
                alt={video.title}
              />
            </NavLink>
            <div className="videoInfo-container">
              <PlayArrowIcon className="playArroww" />
              <div className="videoInfo">
                <span
                  style={{
                    fontSize: "0.9rem",
                    display: "flex",
                    width: "12rem",
                  }}
                >
                  {video.title}
                </span>
                <span
                  style={{
                    fontSize: "1.6vh",
                    color: "gray",
                    paddingBottom: "2vh",
                  }}
                >
                  Made By {video.channel.channelName}
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
      {renderVideoList(videos)}
    </div>
  );
}
