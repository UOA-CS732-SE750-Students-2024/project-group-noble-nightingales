import "./SpotifyRowCSS/SpotifyRow.css";
import { getSpotifyPopular } from "../../../Requests/Explore/YoutubeSpotifyRequest";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext,useEffect, useState } from "react";
import { AuthContext } from "../../../ApplicationContext";

export default function SpotifyRow() {
  const [tracks, setTracks] = useState([]);
  const [,,,,isAuthenticated] = useContext(AuthContext)
  const navigate = useNavigate();
  const handleNavigation = (event, path, track = null) => {
    event.preventDefault(); 
    if (!isAuthenticated) {
      navigate('/explore/login');
    } else {
      if (track) {
        setTracks(track); 
      }
      navigate(path);
    }
  };

  useEffect(() => {
    async function fetchTracks() {
      try {
        const array = await getSpotifyPopular();
        setTracks(array);
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      }
    }
    fetchTracks();
  }, []);

  // Function to render the music list
  const renderMusicList = (musics) => {
    return (
      <ul className="musicList">
        {musics.map((music) => (
          <li className="musicListElement" key={music.trackId}>
            <NavLink to={`/spotify?trackId=${music.trackId}`} onClick={(event) => handleNavigation(event, `/spotify?trackId=${music.trackId}`, music)}>
              <img
                className="musicImage"
                src={music.coverImageUrl}
                alt={music.trackTitle}
              />
            </NavLink>
            <div className="musicInfo-container">
              <div className="musicInfo">
                <span style={{ fontSize: "1.9vh" }}>{music.trackTitle}</span>
                <span style={{ fontSize: "1.6vh", color: "gray" }}>
                  Made By {music.artistName}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="SpotifyRow-container">
      <h2>Popular Tracks</h2>
      <NavLink className="navigationAllLink" to="/spotify" onClick={(event) => handleNavigation(event, '/spotify')}>
        See All
      </NavLink>
      {renderMusicList(tracks)}
    </div>
  );
}
