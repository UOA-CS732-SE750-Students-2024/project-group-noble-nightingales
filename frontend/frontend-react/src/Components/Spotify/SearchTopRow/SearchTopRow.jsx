import "./SearchTopRowCSS/SearchTopRow.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import { NavLink } from "react-router-dom";

export default function SearchTopRow() {
  const dummyTopMusics = [
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲",
      author: "Peter Wang",
    },
  ];

  return (
    <div className="SearchTopRow-container">
      <div className="left">
        <input className="searchBar" type="text" placeholder="Search..." />
      </div>
      <div className="right">
        <h4 className="topTitle">Top Tracks</h4>
        <ul className="topMusicList">
          {dummyTopMusics.map((topMusic) => (
            <li className="topMusicListElement" key={topMusic.name}>
              <NavLink to="/youtube">
                <img
                  className="topMusicImage"
                  src={topMusic.imageURL}
                  alt={topMusic.name}
                />
              </NavLink>
              <div className="topMusicInfo">
                <span style={{ fontSize: "0.9rem" }}>{topMusic.name}</span>
                <span style={{ fontSize: "0.7rem" }}>{topMusic.author}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
