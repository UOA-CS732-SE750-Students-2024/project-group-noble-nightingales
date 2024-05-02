import "./AIRecommendationRowCSS/AIRecommendationRow.css";
import StatsIcon from "../../../assets/StatsIcon.png";
import RecommendationAI from "../../../assets/RecommendationAI.png";
import FilterAI from "../../../assets/FilterAI.png";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function AIRecommendationRow() {

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
    </div>
  );
}
