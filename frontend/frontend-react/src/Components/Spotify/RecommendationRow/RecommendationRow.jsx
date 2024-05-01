import "./RecommendationRowCSS/RecommendationRow.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import triangle from "../../../assets/triangle2.png";
import { NavLink } from "react-router-dom";

function getRandomBoolean() {
  return Math.random() >= 0.5;
}

export default function RecommendationRow() {
  const dummyMusics = [
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲1",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲2",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲3",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲4",
      author: "Peter Wang",
    },
    {
      imageURL: SpotifyCover,
      name: "义勇军进行曲5",
      author: "Peter Wang",
    },
  ];

  // Function to render the music list
  const renderMusicList = (musics) => {
    return (
      <ul className="musicList">
        {musics.map((music) => (
          <li className="musicListElement" key={music.name}>
            <NavLink to="/youtube">
              <img
                className="musicImage"
                src={music.imageURL}
                alt={music.name}
              />
            </NavLink>

            <div className="cover">
              <div className="musicInfo">
                <span
                  style={
                    getRandomBoolean()
                      ? { fontSize: "1.3vh", color: "#EF2F62" }
                      : { fontSize: "1.3vh", color: "#00FFFF" }
                  }
                >
                  New For You
                </span>
                <span style={{ fontSize: "1.5vh", marginTop: "0.8vh" }}>
                  {music.name}
                </span>
                <span
                  style={{
                    fontSize: "1.3vh",
                    marginTop: "1vh",
                    opacity: "0.6",
                  }}
                >
                  {music.author}
                </span>
                <div className="coverImage">
                  <img src={triangle} alt="cover" style={{ width: "2vh" }} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="RecommendationRow-container">
      <h2>You May Like</h2>
      {renderMusicList(dummyMusics)}
    </div>
  );
}
