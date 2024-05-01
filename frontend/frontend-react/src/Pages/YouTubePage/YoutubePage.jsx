import { useState } from "react";
import YoutubePlayer from "../../Components/Youtube/player/YoutubePlayer";

import AIRecommendationRow from "../../Components/Spotify/AIRecommendationRow/AIRecommendationRow";
import YT_component1 from "../../Components/Youtube/recommanded&&search_bar/YT_component1.jsx"
import "./YouTubeCSS/YoutubePageCSS.css"

const YoutubePage=()=>{
    return(
        <main>
            <div>
                <p className="title">Most Popular Videos</p>
            </div>
            <div>
                <img className="youtube-page-item" alt src="/src/assets/rectangle-3@2x.png"/>
            </div>
            <div>
                <AIRecommendationRow/>
            </div>
            <div className="YoutubeRow">
                
            </div>
        </main>
    )
}

export default YoutubePage;