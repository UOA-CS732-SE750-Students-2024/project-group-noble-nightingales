import "./RecommendationRowCSS/RecommendationRow.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import { NavLink } from "react-router-dom";

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
      <h1>You May Like</h1>
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
            <div className="recommendationInfo">
              <span style={{ fontSize: "1rem" }}>{topMusic.name}</span>
              <span style={{ fontSize: "0.8rem" }}>{topMusic.author}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
