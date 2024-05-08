// import "./AIRecommendationRowCSS/AIRecommendationRow.css";
import StatsIcon from "../../../assets/StatsIcon.png";
import RecommendationAI from "../../../assets/RecommendationAI.png";
import FilterAI from "../../../assets/FilterAI.png";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState ,useContext} from "react";
import {getYouTubeAiSearchResult,filterVideo,getYouTubeRecommendation} from '../../../Requests/Youtube/YoutubeRequest'
import { AuthContext } from "../../../ApplicationContext";


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

export default function AIRecommendationRow({setVideoResults}) {
    const [filterTextValue, setFilterTextValue] = useState('');
    const [,,,,,,userId] = useContext(AuthContext)
  const [textValue, setTextValue] = useState('');  
  

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
  const performAiFilter = async() => {
    if(filterTextValue === ""){
      return;
    } 
    const aiRecommendationRow = document.querySelector('.AIRecommendationRow-container'); 
    const offsetHeight = aiRecommendationRow.getBoundingClientRect().height;
    window.scrollBy({ top: offsetHeight*0.5, left: 0, behavior: 'smooth' });
    await filterVideo(filterTextValue, userId);

    const data = await getYouTubeRecommendation(userId); 
    setVideoResults(data);  

  }



const performAiSearch = async() => {
  console.log("Executing AI search with value:", textValue);
  if(textValue === ""){
    return;
  } 
  const aiRecommendationRow = document.querySelector('.AIRecommendationRow-container'); 
  const offsetHeight = aiRecommendationRow.getBoundingClientRect().height;
  window.scrollBy({ top: offsetHeight, left: 0, behavior: 'smooth' });
  const data = await getYouTubeAiSearchResult(textValue);
  console.log("Data:", data);
  setVideoResults(data);
};


  return (
    <div className="AIRecommendationRow-container">
      <h2>
        <img
          src={StatsIcon}
          alt="Icon"
          style={{ marginRight: "1vw", verticalAlign: "-1vh",marginTop:"4vh" }}
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
      {/* <ThemeProvider theme={darkTheme}>
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
      </ThemeProvider> */}
    </div>
  );
}
