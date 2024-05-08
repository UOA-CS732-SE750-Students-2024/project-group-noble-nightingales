import "./RecommendationRowCSS/RecommendationRow.css";
import triangle from "../../../assets/triangle2.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import {
  getSpotifyPopular,
  getSpotifyRecommendation,
  clickOnMusic,
} from "../../../Requests/Explore/YoutubeSpotifyRequest";
import { AuthContext } from "../../../ApplicationContext";
function getRandomBoolean() {
  return Math.random() >= 0.5;
}

export default function RecommendationRow({
  setCurrentTrack,
  recommendationChange,
}) {
  const [tracks, setTracks] = useState([]);
  const [, , , , , , userId] = useContext(AuthContext);
  useEffect(() => {
    async function fetchTracks() {
      try {
        // const array = await getSpotifyRecommendation(userId);
        // console.log(array)
        // setTracks(array);
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      }
    }
    fetchTracks();
  }, [recommendationChange]);

  const listRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!listRef.current) return;
      listRef.current.scrollLeft += e.deltaY + e.deltaX;
      e.preventDefault(); // Prevents vertical scrolling when mouse is over the list
    };

    const listEl = listRef.current;
    listEl.addEventListener("wheel", handleWheel);

    return () => {
      listEl.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Function to render the music list
  const renderMusicList = (musics) => {
    return (
      <ul className="musicList" ref={listRef}>
        {musics.map((music) => (
          <li className="musicListElement" key={music.trackId}>
            <NavLink to={`/spotify?trackId=${music.trackId}`}>
              <img
                className="musicImage"
                src={music.coverImageUrl}
                alt={music.trackTitle}
              />
            </NavLink>

            <div className="cover">
              <div className="musicInfo">
                <span
                  style={
                    getRandomBoolean()
                      ? { fontSize: "1.3vh", color: "#EF2F62" }
                      : { fontSize: "1.3vh", color: "#00FFFF" }
                  }
                >
                  New For You
                </span>
                <span style={{ fontSize: "1.5vh", marginTop: "0.8vh" }}>
                  {music.trackTitle}
                </span>
                <span
                  style={{
                    fontSize: "1.3vh",
                    marginTop: "1vh",
                    opacity: "0.6",
                  }}
                >
                  {music.artistName}
                </span>
                <div
                  className="coverImage"
                  onClick={() => {
                    setCurrentTrack(music.trackId);
                    clickOnMusic(music.artistName[0], userId);
                  }}
                >
                  <img src={triangle} alt="cover" style={{ width: "2vh" }} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="RecommendationRow-container">
      <h2 style={{ marginLeft: "3vw" }}>You May Like</h2>
      {renderMusicList(tracks)}
    </div>
  );
}
