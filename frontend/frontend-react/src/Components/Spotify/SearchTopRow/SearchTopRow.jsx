import "./SearchTopRowCSS/SearchTopRow.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import {getSpotifyPopular} from "../../../Requests/Explore/YoutubeSpotifyRequest"
import { getSpotifySearchResult } from "../../../Requests/Explore/YoutubeSpotifyRequest";
import { clickOnMusic } from "../../../Requests/Explore/YoutubeSpotifyRequest";

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

export default function SearchTopRow({setCurrentTrack, setTrackResult, setOpen}) {
  const [tracks, setTracks] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = async(event) => {
    if (input === "") {
      setOpen(true);
      return;
    }
    if (event.key === 'Enter') {
        window.scrollBy({ top: window.innerHeight*1.8, left: 0, behavior: 'smooth' });
        event.preventDefault();
        const data = await getSpotifySearchResult(input);
        setTrackResult(data);
    }
  }
  useEffect(() => {
    async function fetchTracks() {
      try {

        const array = await getSpotifyPopular(); 
        setTracks(array);  
      } catch (error) {
        console.error('Failed to fetch tracks:', error);
      }
    }
    fetchTracks();
  }, []);

  // Function to render the music list
  const renderMusicList = (musics) => {
    return (
      <ul className="musicList">
                {musics.map((music) => (
          <li className="musicListElement" key={music.trackId}>
            <NavLink  to={`/spotify?trackId=${music.trackId}`}>
              <img
                className="musicImage"
                src={music.coverImageUrl}
                alt={music.trackTitle}
                onClick={() => {
                  setCurrentTrack(music.trackId);
                  clickOnMusic(music.artistName[0]);
                }}
              />
            </NavLink>
            <div className="musicInfo-container">
              <div className="musicInfo">
                <span style={{ fontSize: "1.6vh" }}>{music.trackTitle}</span>
                <span style={{ fontSize: "1.3vh", color: "gray" }}>
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
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
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
                  <SearchIcon style={{ color: "white" }} onClick={async() => {
                    if (input === "") {
                      setOpen(true);
                      return;
                    }
                    window.scrollBy({ top: window.innerHeight*1.8, left: 0, behavior: 'smooth' });
                    const data = await getSpotifySearchResult(input);
                    setTrackResult(data);
                  }}/>
                </InputAdornment>
              ),
            }}
          />
        </ThemeProvider>
      </div>
      <div className="right">
        <h4 className="topTitle">Top Tracks</h4>
        {renderMusicList(tracks)}
      </div>
    </div>
  );
}
