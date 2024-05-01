import "./YouTubeCSS/YouTube.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import YouTubeCover from "../../../assets/YouTubeCover.png";
import { NavLink } from "react-router-dom";

export default function YouTubeRow() {
  return (
    <div className="YoutubeRowContainer">
      <ul className="sectionTitleList">
        <li className="sectionTitileName">Explore YouTube Videos</li>
        <li className="SectionTitleLink">
          <NavLink to="/youtube"> See All </NavLink>
        </li>
      </ul>
      <ul className="firstYoutubeRow">
        <li>
          <ul className="insideYoutubeList">
            <li>
              <NavLink to="/youtube">
                <img src={YouTubeCover} alt="Cover" />
              </NavLink>
            </li>
            <li>
              <ul className="titleList">
                <li className="playButton">
                  <PlayArrowIcon />
                </li>
                <li className="titleName">YoutubeTitle</li>
              </ul>
            </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideYoutubeList">
            <li>
              <NavLink to="/youtube">
                <img src={YouTubeCover} alt="Cover" />
              </NavLink>
            </li>
            <li>
              <ul className="titleList">
                <li className="playButton">
                  <PlayArrowIcon />
                </li>
                <li className="titleName">YoutubeTitle</li>
              </ul>
            </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideYoutubeList">
            <li>
              <NavLink to="/youtube">
                <img src={YouTubeCover} alt="Cover" />
              </NavLink>
            </li>
            <li>
              <ul className="titleList">
                <li className="playButton">
                  <PlayArrowIcon />
                </li>
                <li className="titleName">YoutubeTitle</li>
              </ul>
            </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideYoutubeList">
            <li>
              <NavLink to="/youtube">
                <img src={YouTubeCover} alt="Cover" />
              </NavLink>
            </li>
            <li>
              <ul className="titleList">
                <li className="playButton">
                  <PlayArrowIcon />
                </li>
                <li className="titleName">YoutubeTitle</li>
              </ul>
            </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
      </ul>
      <ul className="secondYoutubeRow">
        <li>
          <ul className="insideYoutubeList">
            <li>
              <NavLink to="/youtube">
                <img src={YouTubeCover} alt="Cover" />
              </NavLink>
            </li>
            <li>
              <ul className="titleList">
                <li className="playButton">
                  <PlayArrowIcon />
                </li>
                <li className="titleName">YoutubeTitle</li>
              </ul>
            </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideYoutubeList">
            <li>
              <NavLink to="/youtube">
                <img src={YouTubeCover} alt="Cover" />
              </NavLink>
            </li>
            <li>
              <ul className="titleList">
                <li className="playButton">
                  <PlayArrowIcon />
                </li>
                <li className="titleName">YoutubeTitle</li>
              </ul>
            </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideYoutubeList">
            <li>
              <NavLink to="/youtube">
                <img src={YouTubeCover} alt="Cover" />
              </NavLink>
            </li>
            <li>
              <ul className="titleList">
                <li className="playButton">
                  <PlayArrowIcon />
                </li>
                <li className="titleName">YoutubeTitle</li>
              </ul>
            </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
        <li>
          <ul className="insideYoutubeList">
            <li>
              <NavLink to="/youtube">
                <img src={YouTubeCover} alt="Cover" />
              </NavLink>
            </li>
            <li>
              <ul className="titleList">
                <li className="playButton">
                  <PlayArrowIcon />
                </li>
                <li className="titleName">YoutubeTitle</li>
              </ul>
            </li>
            <li className="author">Made by WHO</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
