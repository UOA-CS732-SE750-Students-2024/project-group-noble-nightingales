import "./SearchTopRowCSS/SearchTopRow.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";

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
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲",
      author: "Peter Wang",
    },
  ];

  return (
    <div className="SearchTopRow-container">
      <div className="TopRowText">Spotify</div>
      <div className="TopRowImg"></div>
      <div className="left">
        <TextField
          className="searchBar"
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          InputProps={{
            style: {
              color: "white", // Input text color
              backgroundColor: "gray", // Text field background color
              borderRadius: "5px", // Adjust as needed
              width: "200%",
              height: "5.5vh",
            },
          }}
          InputLabelProps={{
            style: {
              color: "white",
              fontSize: "1.5vh" // Label text color
            },
          }}
        />
      </div>
      <div className="right">
        <h4 className="topTitle">Top Tracks In Real Time</h4>
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
              <div className="topMusicPlay">
                <SearchIcon className="search-icon"  />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
