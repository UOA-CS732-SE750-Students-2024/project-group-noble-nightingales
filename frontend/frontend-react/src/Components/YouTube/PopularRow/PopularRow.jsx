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
import { useState,useEffect } from "react";
import {getYouTubeSearch,getYouTubeRandomSearch} from "../../../Requests/Youtube/YoutubeRequest"

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white !important",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#34d5eb !important",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#18bfd6 !important",
          },
        },
      },
    },
  },
});

export default function PopularRow({setVideoResults}) {
  const [videos, setVideos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchTracks() {
      try {
        const data = await getYouTubeRandomSearch(); 
        console.log(data);
        setVideos(data.videoList);  
      } catch (error) {
        console.error('Failed to fetch tracks:', error);
      }
    }
    fetchTracks();
  }, []);

  
  const handleKeyDown = async(event) => {
    if (event.key === 'Enter') {
      if (input === "") {
        return;
      }
        window.scrollBy({ top: window.innerHeight*1.8, left: 0, behavior: 'smooth' });
        event.preventDefault();
        const data = await getYouTubeSearch(input);
        console.log(data);
        setVideoResults(data.videoList);
    }
  }

  // Function to render the video list
  const renderVideoList = (videos) => {
    return (
      <ul className="videoList">
        {videos.map((video) => (
          <li className="videoListElement" key={video.videoId}>
            <NavLink to="/youtube/player">
              <img
                className="videoImage"
                src={video.coverImgUrl}
                alt={video.title}
              />
            </NavLink>
            <div className="videoInfo-container">
              <PlayArrowIcon className="playArrow" />
              <div >
                {/* Change here to ul li to make them start align */}
                <ul className="videoInfo">
                  <li>
                    {/* style={{ fontSize: "1.9vh", marginLeft: "-1.2vw" }} */}
                    <span className="videoTitle" >
                      {video.title}
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: "1.6vh",
                        color: "gray",
                      }}
                    >
                      Made By {video.channel.channelName}
                    </span>
                  </li>
                </ul>
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
              verticalAlign: "-1.8vh",
              width: "3vw",
              marginLeft: "1vw",
            }}
          />
        </h2>
        <img
          src={Cube}
          alt="Popular video cube"
          className="rotate"
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
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            InputProps={{
              style: {
                color: "white",
                backgroundColor: "#FFFFFF19",
                borderRadius: "0.2vh",
                height: "5.5vh",
                width: "53.5vw",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />
        </ThemeProvider>
        {renderVideoList(videos)}
      </div>
    </div>
  );
}
