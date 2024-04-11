
import './ExploreCSS/Explore.css'
import { Outlet } from 'react-router-dom'
import Ball from '../../Components/Ball/Ball'
import { NavLink } from 'react-router-dom';
import row11 from "../../assets/row1.png"
import row12 from "../../assets/row2.png"
import row13 from "../../assets/row3.png"
import row21 from "../../assets/2row1.png"
import row22 from "../../assets/2row2.png"
import row23 from "../../assets/2row3.png"
export default function Explore() {
  return (
    <div>
        <Ball />
      <div className="Explore-container">
        <div className="introRowContainer">
          <div className="leftIntro">
            <ul className="headTextIntro">
              <li>Listen & Watch: </li>
              <li>Your Ultimate App</li>
              <li>For Media Content</li>
            </ul>

            <p className="insideText">Featuring a Diverse Library from Various Leading Platforms</p>
            <div >
              <ul className="mediaIntro">
              <li>
                <ul>
                <li className="mediaTitle">
                <NavLink to="/youtube">YouTube</NavLink>
                </li>
                <li className="mediaType">Videos</li>
              </ul>
              </li>
              <li>
                <ul>
                <li className="mediaTitle">
                <NavLink to="/spotify">Spotify</NavLink>
                  </li>
                <li className="mediaType">Music</li>
                </ul>
                </li>
              <li>
                <ul>
              <li className="mediaTitle">
              <NavLink to="/community"> &gt;&gt;&gt;&gt;</NavLink>
               
                </li>
                <li className="mediaType">Others</li>
                </ul>
                </li>
            </ul>
            </div>
       
        
            <ul className="buttonIntro">
              <li><span className="startExplor">Start Exploring</span></li>
              <li ><NavLink className="newtoHere" to="/explore/signup">New to Here?</NavLink></li>
            </ul>

          </div>

          <div className="rightIntro">
            <ul className='firstRowPicture'>
              <li><img src={row11} alt="horse" /></li>
              <li><img src={row12} alt="man" /></li>
              <li><img src={row13} alt="captain" /></li>
            </ul>
            <ul className='secondRowPicture'>
              <li><img src={row21} alt="" /></li>
              <li><img src={row22} alt="" /></li>
              <li><img src={row23} alt="" /></li>
            </ul>
          </div>
        </div>
        <div className="pictureRowContainer">

        </div>
        <div className="embeddAIContainer">

        </div>
        <div className="exploreYoutubeCOn">

        </div>
        <div className="popularTrackContainer">

        </div>
        <div className="subscribeContianer">

        </div>

      <Outlet />
    </div>
    </div>

  )
}
