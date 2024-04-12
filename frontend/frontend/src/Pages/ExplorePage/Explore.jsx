
import './ExploreCSS/Explore.css'
import { Outlet } from 'react-router-dom'
import Ball from '../../Components/Ball/Ball'
import IntroRow from '../../Components/Explore/IntroRow/IntroRow'
import PictureRow from "../../Components/Explore/PictureSecondRow/PictureRow"
import AIRow from '../../Components/Explore/AIRow/AIRow'
import YoutubeRow from '../../Components/Explore/YoutubeRow/YoutubeRow'
import SpotifyRow from '../../Components/Explore/SpotifyRow/SpotifyRow'
import SubRow from '../../Components/Explore/SubscribeRow/SubscribeRow'
export default function Explore() {
  return (
    <div>
        <Ball />
       
        <div className="Explore-container">
          <div>
              <IntroRow />
          </div>
      
          <div className="pictureRowContainer">

          <PictureRow />
          </div>

          <div className="embeddAIContainer">
          <AIRow />
          </div>

          <div className="exploreYoutubeCOn">
          <YoutubeRow />
          </div>

          <div className="popularTrackContainer">
          <SpotifyRow/>
          </div>
          <div className="subscribeContianer">
          <SubRow/>
          </div>
        </div>

        <Outlet />

    </div>

  )
}
