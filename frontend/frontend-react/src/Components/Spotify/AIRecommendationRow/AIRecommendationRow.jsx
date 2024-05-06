import "./AIRecommendationRowCSS/AIRecommendationRow.css";
import StatsIcon from "../../../assets/StatsIcon.png";
import RecommendationAI from "../../../assets/RecommendationAI.png";
import FilterAI from "../../../assets/FilterAI.png";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { getSpotifyAiSearchResult, filterMusic } from "../../../Requests/Explore/YoutubeSpotifyRequest";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const themeGreen = createTheme({
  components: {
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          '&:after': {
            borderBottomColor: '#15FFAB',
          },
        },
      },
    },
  },
});

const themePurple = createTheme({
  components: {
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          '&:after': {
            borderBottomColor: '#a820c6',
          },
        },
      },
    },
  },
});

export default function AIRecommendationRow({setTrackResult, open, setOpen, recommendationChange, setRecommendationChange}) {
  


  const [textValue, setTextValue] = useState('');  
  const [filterTextValue, setFilterTextValue] = useState('');

  const handleTextChange = (event) => {
      setTextValue(event.target.value);  
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        performAiSearch();
    }
  };

  const handleKeyDownForFiltering = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        performAiFilter();
    }
  };

const performAiSearch = async() => {
  console.log("Executing AI search with value:", textValue);
  if(textValue === ""){
    setOpen(true);
    return;
  } 
  window.scrollBy({ top: window.innerHeight*0.8, left: 0, behavior: 'smooth' });
  const data = await getSpotifyAiSearchResult(textValue);
  console.log("Data:", data);
  setTrackResult(data);
};

const performAiFilter = async() => {
  if(filterTextValue === ""){
    setOpen(true);
    return;
  } 
  window.scrollBy({ top: window.innerHeight*-0.8, left: 0, behavior: 'smooth' });
  await filterMusic(filterTextValue);
  setRecommendationChange(!recommendationChange);
}

  return (
    <div className="AIRecommendationRow-container">
      <h2>
        <img
          src={StatsIcon}
          alt="Icon"
          style={{ marginRight: "1vw", verticalAlign: "-1vh" }}
        />
        Embedded AI Recommendation
      </h2>
      <div className="label-container">
        <div className="label-subcontainer">
          <h3 className="recommendationLabel">
            <img
              src={RecommendationAI}
              alt="Icon"
              style={{marginRight: "1vw", verticalAlign: "-0.4vh", marginLeft: "0.8vw"}}
            />
            AI Recommendations
          </h3>
        </div>
        <div className="textfield-container"></div>
      </div>
      <ThemeProvider theme={themeGreen}>
        <TextField
          id="outlined-multiline-static"
          multiline
          placeholder="Simply describe what you want in natural language, and our AI will bring you videos that match the categories!"
          rows={8}
          variant="filled"
          InputProps={{
            style: {
              color: "white",
              backgroundColor: "#FFFFFF19",
              borderRadius: "1vh 1vh 0vh 0vh",
            },
          }}
          InputLabelProps={{ style: { color: "white" } }}
          value={textValue}  
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
      </ThemeProvider>
      <div style={{height: "3vh"}}></div>
      <div className="label-container">
        <h3 className="FilterLabel">
          <img
            src={FilterAI}
            alt="Icon"
            style={{ marginLeft: "0.8vw",marginRight: "1vw", verticalAlign: "-0.4vh" }}
          />
          AI Filtering
        </h3>
      </div>
      <div className="textfield-container"></div>
      <ThemeProvider theme={themePurple}>
      <TextField
        id="outlined-multiline-static"
        multiline
        placeholder="Simply describe what you do not want in natural language, and our AI will not bring you videos that match the categories!"
        rows={8}
        variant="filled"
        value={filterTextValue}
        onChange={(event) => setFilterTextValue(event.target.value)}
        onKeyDown={handleKeyDownForFiltering}
        InputProps={{
          style: {
            color: "white",
            backgroundColor: "#FFFFFF19",
            borderRadius: "1vh 1vh 0vh 0vh",
          }
        }}
        InputLabelProps={{ style: { color: "white" } }}
      />
      </ThemeProvider>
      <ThemeProvider theme={darkTheme}>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle sx={{fontFamily: 'Helvetica'}}>{"Input Required"}</DialogTitle>
          <DialogContent>
            <p>You have to put something in the text field to perform this operation.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} style={{color: "#15FFAB"}}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
