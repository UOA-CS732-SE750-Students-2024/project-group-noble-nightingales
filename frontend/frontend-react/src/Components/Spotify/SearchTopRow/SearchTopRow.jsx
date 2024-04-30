import "./SearchTopRowCSS/SearchTopRow.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white !important', // Default border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#15FFAB !important', // Border color on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#15FFAB !important', // Border color on focus
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
        <ThemeProvider theme={theme}>
          <TextField
            className="searchBar"
            id="outlined-search"
            label="Search field"
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
            InputLabelProps={{
              style: {
                color: "white",
                fontSize: "1.5vh" // Label text color
              },
            }}
          />
        </ThemeProvider>
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
                <span style={{ fontSize: "1.6vh" }}>{topMusic.name}</span>
                <span style={{ fontSize: "1.3vh" }}>{topMusic.author}</span>
              </div>
              <div className="topMusicPlay">
                <SearchIcon className="search-icon" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
