import "./AIRecommendationRowCSS/AIRecommendationRow.css";
import StatsIcon from "../../../assets/StatsIcon.png";
import RecommendationAI from "../../../assets/RecommendationAI.png";
import FilterAI from "../../../assets/FilterAI.png";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";

export default function AIRecommendationRow() {
  return (
    <div className="AIRecommendationRow-container">
      <h1>
        <img
          src={StatsIcon}
          alt="Icon"
          style={{ marginRight: "10px", verticalAlign: "-10%" }}
        />
        Embedded AI Recommendation
      </h1>
      <div className="label-container">
        <h3 className="recommendationLabel">
          <img
            src={RecommendationAI}
            alt="Icon"
            style={{ marginRight: "10px", verticalAlign: "-10%" }}
          />
          AI Recommendations
        </h3>
        <div className="textfield-container"></div>
      </div>
      <TextField
        id="outlined-multiline-static"
        multiline
        placeholder="Simply describe what you want in natural language, and our AI will bring you videos that match the categories!"
        rows={8}
        variant="filled"
        InputProps={{
          style: {
            color: "white",
            backgroundColor: "#424242",
            borderRadius: "10px",
          },
        }}
        InputLabelProps={{ style: { color: "white" } }}
      />
      <NavLink className="submitNavLink">Submit</NavLink>
      <div className="label-container">
        <h3 className="FilterLabel">
          <img
            src={FilterAI}
            alt="Icon"
            style={{ marginRight: "10px", verticalAlign: "-10%" }}
          />
          AI Filtering
        </h3>
      </div>
      <div className="textfield-container"></div>
      <TextField
        id="outlined-multiline-static"
        multiline
        placeholder="Simply describe what you want in natural language, and our AI will bring you videos that match the categories!"
        rows={8}
        variant="filled"
        InputProps={{
          style: {
            color: "white",
            backgroundColor: "#424242",
            borderRadius: "10px",
          },
        }}
        InputLabelProps={{ style: { color: "white" } }}
      />
      <NavLink className="submitNavLink" style={{ top: "183%" }}>
        Submit
      </NavLink>
    </div>
  );
}
