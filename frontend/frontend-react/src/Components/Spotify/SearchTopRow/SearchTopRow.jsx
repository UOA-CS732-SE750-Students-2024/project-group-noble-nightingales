import "./SearchTopRowCSS/SearchTopRow.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white !important", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#15FFAB !important", // Border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#15FFAB !important", // Border color on focus
          },
        },
      },
    },
  },
});

export default function SearchTopRow() {
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
  ];

  // Function to render the music list
  const renderMusicList = (musics) => {
    return (
      <ul className="musicList">
        {musics.map((music) => (
          <li className="musicListElement" key={music.name}>
            <NavLink to="/youtube">
              <img
                className="musicImage"
                src={music.imageURL}
                alt={music.name}
              />
            </NavLink>
            <div className="musicInfo-container">
              <div className="musicInfo">
                <span style={{ fontSize: "1.6vh" }}>{music.name}</span>
                <span style={{ fontSize: "1.2vh", color: "gray" }}>
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
    <div className="SearchTopRow-container">
      <div className="TopRowText">Spotify</div>
      <div className="TopRowImg"></div>
      <div className="left">
        <ThemeProvider theme={theme}>
          <TextField
            className="searchBar"
            id="outlined-search"
            placeholder="Search..."
            type="search"
            variant="outlined"
            InputProps={{
              style: {
                color: "white", // Input text color
                backgroundColor: "#FFFFFF19", // Text field background color
                borderRadius: "0.2vh", // Adjust as needed
                width: "200%",
                height: "5.5vh",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />
        </ThemeProvider>
      </div>
      <div className="right">
        <h4 className="topTitle">Top Tracks In Real Time</h4>
        {renderMusicList(dummyTopMusics)}
      </div>
    </div>
  );
}
