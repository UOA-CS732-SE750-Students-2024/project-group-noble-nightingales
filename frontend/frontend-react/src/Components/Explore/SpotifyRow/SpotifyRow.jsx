import "./SpotifyRowCSS/SpotifyRow.css";
import SpotifyCover from "../../../assets/SpotifyCover.png";
import { NavLink } from "react-router-dom";

export default function SpotifyRow() {
  return (
    <div className="SpotifyRowContainer">
      <ul className="sectionTitleList">
        <li className="sectionTitileName">Popular Tracks</li>
        <li className="SectionTitleLink">
          <NavLink to="/spotify"> See All </NavLink>
        </li>
      </ul>
      <ul className="spotifyRow">
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideSpotifyList">
            <li>
              <NavLink to="/youtube">
                <img src={SpotifyCover} alt="Cover" />
              </NavLink>
            </li>
            <li className="titleName"> Song Name </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
