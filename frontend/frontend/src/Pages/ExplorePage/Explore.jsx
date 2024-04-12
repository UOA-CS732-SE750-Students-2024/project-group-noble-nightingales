
import './ExploreCSS/Explore.css'
import { Outlet } from 'react-router-dom'
import Ball from '../../Components/Ball/Ball'
import IntroRow from '../../Components/Explore/IntroRow/IntroRow'
import PictureRow from "../../Components/Explore/PictureSecondRow/PictureRow"
export default function Explore() {
  return (
    <div>
        <Ball />
       
        <div className="Explore-container">
          <div>
              <IntroRow/>
          </div>
      
          <div className="pictureRowContainer">

          <PictureRow />
          </div>

          <div className="embeddAIContainer">

          </div>

          <div className="exploreYoutubeCOn">

          </div>

          <div className="popularTrackContainer">

          </div>
          <div className="subscribeContianer">

          </div>
        </div>

        <Outlet />

    </div>

  )
}
