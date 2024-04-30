import "./RecommendationRowCSS/RecommendationRow.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import { NavLink } from "react-router-dom";
import triangle from "../../../assets/triangle2.png";

function getRandomBoolean() {
  return Math.random() >= 0.5;
}

export default function RecommendationRow() {
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
    <div className="RecommendationRow-container">
      <h2>You May Like</h2>
      <ul className="recommendationList">
        {dummyTopMusics.map((topMusic) => (
          <li className="recommendationElement" key={topMusic.name}>
            <NavLink to="/youtube">
              <img
                className="recommendationImage"
                src={topMusic.imageURL}
                alt={topMusic.name}
              />
            </NavLink>
            
            <div className="cover">
              <div className="recommendationInfo">
                <span style={getRandomBoolean() ? { fontSize: "0.8rem", color: "#EF2F62" } : { fontSize: "0.8rem", color: "#00FFFF" }}>New For You</span>
                <span style={{ fontSize: "1rem", marginTop: "0.8vh" }}>{topMusic.name}</span>
                <span style={{ fontSize: "0.8rem", marginTop: "1vh", opacity: "0.6" }}>{topMusic.author}</span>
                <div className="coverImage">
                  <img src={triangle} alt="cover" style={{width: "2vh"}}/>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
