import styles from"./SpotifyRowCSS/SpotifyRow.module.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import { NavLink } from "react-router-dom";
import { clickOnMusic } from "../../../Requests/Explore/YoutubeSpotifyRequest";
import { useContext } from "react";
import { AuthContext } from "../../../ApplicationContext";

export default function SpotifyRow( {trackResult, setCurrentTrack} ) {

  const [,,,,,,userId] = useContext(AuthContext);

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
      <ul className={styles.musicList}>
        {musics.map((music) => (
          <li className={styles.musicListElement} key={music.trackId}>
            <NavLink to="/spotify">
              <img
                className={styles.musicImage}
                src={music.coverImageUrl}
                alt={music.trackTitle}
                onClick={() => {
                  setCurrentTrack(music.trackId);
                  clickOnMusic(music.artistName[0], userId);
                }}
              />
            </NavLink>
            <div className={styles.musicInfoContainer}>
              <div className={styles.musicInfo}>
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
    <div className={styles.SpotifyRowContainer}>
      <h2>Spotify Musics For You</h2>
      {renderMusicList(trackResult.data ? trackResult.data : dummyMusics)}
    </div>
  );
}
