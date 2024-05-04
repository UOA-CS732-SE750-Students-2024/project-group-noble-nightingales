import "./SpotifyRowCSS/SpotifyRow.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import { NavLink } from "react-router-dom";

export default function SpotifyRow() {
  const dummyMusics = [
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲1",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲2",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲3",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲4",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲5",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲6",
      author: "Peter Wang",
    },
  ];

  // Function to render the music list
  const renderMusicList = (musics) => {
    return (
      <ul className="musicList">
        {musics.map((music) => (
          <li className="musicListElement" key={music.name}>
            <NavLink to="/spotify">
              <img
                className="musicImage"
                src={music.imageURL}
                alt={music.name}
              />
            </NavLink>
            <div className="musicInfo-container">
              <div className="musicInfo">
                <span style={{ fontSize: "1.6vh" }}>{music.name}</span>
                <span style={{ fontSize: "1.4vh", color: "gray" }}>
                  Made By {music.author}
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
      {renderMusicList(dummyMusics)}
    </div>
  );
}
