import "./IntroCSS/Intro.css";
import row11 from "../../../assets/row1.png";
import row12 from "../../../assets/row2.png";
import row13 from "../../../assets/row3.png";
import row21 from "../../../assets/2row1.png";
import row22 from "../../../assets/2row2.png";
import row23 from "../../../assets/2row3.png";
import { NavLink , useNavigate} from "react-router-dom";
import { AuthContext } from "../../../ApplicationContext";
import { useContext} from "react";
export default function IntroRow() {
  const [,,,,isAuthenticated] = useContext(AuthContext)
  const navigate = useNavigate();
  const handleNavigation = (event, path) => {
    event.preventDefault(); // Prevent default link behavior
    if (!isAuthenticated) {
      navigate('/explore/login');
    } else {
      navigate(path);
    }
  };
  const navigateToLogin = () => {
    navigate('/explore/login');
  };
  return (
    <div>
      <div className="introRowContainer">
        <div className="leftIntro">
          <ul className="headTextIntro">
            <li>Listen & Watch: </li>
            <li>Your Ultimate App</li>
            <li>For Media Content</li>
          </ul>
          <p className="insideText">
            Featuring a Diverse Library from Various Leading Platforms
          </p>
          <div>
            <ul className="mediaIntro">
              <li>
                <ul>
                  <li className="mediaTitle">
                    
                    <NavLink to="/youtube" onClick={(event) => handleNavigation(event, '/youtube')}>
                      YouTube
                    </NavLink>
                  </li>
                  <li className="mediaType">Videos</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mediaTitle">
                    <NavLink to="/spotify" onClick={(event) => handleNavigation(event, '/spotify')}>
                      Spotify
                    </NavLink>
                  </li>
                  <li className="mediaType">Music</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mediaTitle">
                    <span> &gt;&gt;&gt;&gt;</span>
                  </li>
                  <li className="mediaType">Others</li>
                </ul>
              </li>
            </ul>
          </div>

          <ul className="buttonIntro">
            <li>
              <span className="startExplor" onClick={navigateToLogin}>Start Exploring</span>
            </li>
            <li>
              <NavLink className="newtoHere" to="/explore/signup">
                New to Here?
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="rightIntro">
          <ul className="firstRowPicture">
            <li>
              <img src={row11} alt="horse" />
            </li>
            <li>
              <img src={row12} alt="man" />
            </li>
            <li>
              <img src={row13} alt="captain" />
            </li>
          </ul>
          <ul className="secondRowPicture">
            <li>
              <img src={row21} alt="" />
            </li>
            <li>
              <img src={row22} alt="" />
            </li>
            <li>
              <img src={row23} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
