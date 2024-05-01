import "./SpotifyRowCSS/SpotifyRow.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import { NavLink } from "react-router-dom";

export default function SpotifyRow() {
  const dummyTopMusics = [
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
      name: "义勇军进行曲5",
      author: "Peter Wang",
    },
  ];

  // Function to render the video list
  const renderMusicList = (musics) => {
    return (
      <ul className="videoList">
        {musics.map((music) => (
          <li className="videoListElement" key={music.name}>
            <NavLink to="/youtube">
              <img
                className="videoImage"
                src={music.imageURL}
                alt={music.name}
              />
            </NavLink>
            <div className="videoInfo-container">
              <PlayArrowIcon className="playArrow" />
              <div className="videoInfo">
                <span style={{ fontSize: "1.9vh" }}>{music.name}</span>
                <span style={{ fontSize: "1.6vh", color: "gray" }}>
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
    <div className="SpotifyRowContainer">
      <ul className="sectionTitleList">
        <li className="sectionTitileName">Popular Tracks</li>
        <li className="SectionTitleLink">
          <NavLink to="/spotify"> See All </NavLink>
        </li>
      </ul>
      <ul className="spotifyRow">
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
