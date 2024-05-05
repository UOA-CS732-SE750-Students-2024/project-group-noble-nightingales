import "./SpotifyRowCSS/SpotifyRow.module.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import { NavLink } from "react-router-dom";

export default function SpotifyRow( {trackResult} ) {
  const dummyMusics = [
    {
      coverImageUrl: SpotifyCover,
      artistName: "Peter Wang",
      trackTitle: "义勇军进行曲1",
      trackId: 1,
    },
    {
      coverImageUrl: SpotifyCover,
      artistName: "Peter Wang",
      trackTitle: "义勇军进行曲1",
      trackId: 2,
    }
  ];

  // Function to render the music list
  const renderMusicList = (musics) => {
    if (!musics || musics.length === 0) {
      return <p>No tracks found.</p>;
  }
    return (
      <ul className="musicList">
        {musics.map((music) => (
          <li className="musicListElement" key={music.trackId}>
            <NavLink to="/spotify">
              <img
                className="musicImage"
                src={music.coverImageUrl}
                alt={music.trackTitle}
              />
            </NavLink>
            <div className="musicInfo-container">
              <div className="musicInfo">
                <span style={{ fontSize: "1.6vh" }}>{music.trackTitle}</span>
                <span style={{ fontSize: "1.4vh", color: "gray" }}>
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
      <h2>Spotify Musics For You</h2>
      {renderMusicList(trackResult.data ? trackResult.data : dummyMusics)}
    </div>
  );
}
