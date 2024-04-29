import "./PictureRow.css/PictureRow.css";
import cat1 from "../../../assets/2row2.png";
import pinkBall from "../../../assets/ball.png";
import catGalaxy from "../../../assets/catGalaxy.png";
import parrots from "../../../assets/parrots.png";

export default function PictureRow() {
  return (
    <div className="pictureRow-container">
      <div>
        <ul className="leftPicture">
          <li>
            <img src={cat1} alt="cat" />
          </li>
          <li>
            <img src={catGalaxy} alt="" />
          </li>
          <li>
            <img src={parrots} alt="" />
          </li>
        </ul>
      </div>
      <div className="rightBallPicture">
        <img src={pinkBall} alt="cat" />
      </div>
    </div>
  );
}
