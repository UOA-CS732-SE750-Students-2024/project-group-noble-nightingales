
import './ExploreCSS/Explore.css'
import { Outlet } from 'react-router-dom'
import Ball from '../../Components/Ball/Ball'
import { NavLink } from 'react-router-dom';
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
            <span>Featuring a Diverse Library from Various Leading Platforms</span>
            <ul className="mediaIntro">
              <li><ul>
                <li>Youtube</li>
                <li>Videos</li>
              </ul></li>
              <li><ul>
                <li>Spotify</li>
                <li>Music</li>
                </ul></li>
              <li><ul>
              <li>&gt;&gt;&gt;&gt;</li>
                <li>Others</li>
                </ul></li>
            </ul>
            <ul className="buttonIntro">
              <li>Start Exploring</li>
              <li><NavLink to="/explore/signup">New to Here?</NavLink></li>
            </ul>
          </div>
          <div className="rightIntro">
            <ul className='firstRowPicture'>
              <li></li>
            </ul>
            <ul className='secondRowPicture'>
              <li></li>
            </ul>
          </div>
        </div>

      <Outlet />
    </div>
    </div>

  )
}
