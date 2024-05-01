import "./PopularRowCSS/PopularRow.css";
import Cube from "../../../assets/Cube.png";
import Star from "../../../assets/Star.png";
import YouTubeCover from "../../../assets/YouTubeCover.png";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white !important",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#15FFAB !important",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#15FFAB !important",
          },
        },
      },
    },
  },
});

export default function PopularRow() {
  // Might need to refactor dummy data lists alongside subsequent <li> components to reduce code duplication
  const dummyTopVideos = [
    {
      imageURL: YouTubeCover,
      name: "Starcraft1",
      author: "Peter Wang",
    },
    {
      imageURL: YouTubeCover,
      name: "Starcraft2",
      author: "Peter Wang",
    },
  ];

  // Function to render the video list
  const renderVideoList = (videos) => {
    return (
      <ul className="videoList">
        {videos.map((video) => (
          <li className="videoListElement" key={video.name}>
            <NavLink to="/youtube">
              <img
                className="videoImage"
                src={video.imageURL}
                alt={video.name}
              />
            </NavLink>
            <div className="videoInfo-container">
              <PlayArrowIcon className="playArrow" />
              <div className="videoInfo">
                <span style={{ fontSize: "1.9vh" }}>{video.name}</span>
                <span style={{ fontSize: "1.6vh", color: "gray" }}>
                  Made By {video.author}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="PopularRow-container">
      <div className="left">
        <h2>
          Most Popular Videos
          <img
            src={Star}
            alt="Popular video star"
            style={{
              verticalAlign: "-1.6vh",
              width: "3vw",
            }}
          />
        </h2>
        <img
          src={Cube}
          alt="Popular video cube"
          style={{
            marginTop: "-10vh",
            width: "40vw",
            marginLeft: "-5vw",
          }}
        />
      </div>
      <div className="right">
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-search"
            type="search"
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              style: {
                color: "white",
                backgroundColor: "#FFFFFF19",
                borderRadius: "0.2vh",
                height: "5.5vh",
                width: "56vw",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />
        </ThemeProvider>
        {renderVideoList(dummyTopVideos)}
        {renderVideoList(dummyTopVideos)}
      </div>
    </div>
  );
}
