import "./SpotifyRowCSS/SpotifyRow.css";
import {getSpotifyPopular} from "../../../Requests/Explore/YoutubeSpotifyRequest"
import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";

export default function SpotifyRow() {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    async function fetchTracks() {
      try {

        const array = await getSpotifyPopular(); 
        setTracks(array);  
      } catch (error) {
        console.error('Failed to fetch tracks:', error);
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
            <NavLink  to={`/spotify?trackId=${music.trackId}`}>
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
      <NavLink className="navigationAllLink" to="/spotify">
        See All
      </NavLink>
      {renderMusicList(tracks)}
    </div>
  );
}
