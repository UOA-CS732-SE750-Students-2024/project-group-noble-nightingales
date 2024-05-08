import "./YouTubeCSS/YouTube.css";
import PopularRow from "../../Components/YouTube/PopularRow/PopularRow";
import AIRecommendationRow from "../../Components/YouTube/AIRecommendationRow/AIRecommendationRow";
import YouTubeRow from "../../Components/YouTube/YouTubeRow/YouTubeRow";
import BallDynamic from "../../Components/BallDynamic/Ball";
import BallStatic from "../../Components/BallStatic/Ball";

import {getYouTubeRandomSearch,getMoreVideo} from "../../Requests/Youtube/YoutubeRequest"
import { useState ,useEffect} from "react";
import LoadingAnimation from "../../Dialogs/Spotify/LoadingAnimation";
import { Button } from "@mui/material";

export default function YouTube() {
  const [videoResults, setVideoResults] = useState({ videoList: [], nextPageToken: null, prevPageToken: null });
  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      //TODO: 把这里改成成推荐的function
      console.log("YOUTUBR.jsx")
      try {

        const data = await getYouTubeRandomSearch(); 
        console.log(data.videoList);
        // setVideoResults(data.videoList);  
        setVideoResults(data);  
        console.log(videoResults)

      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      }
    }
    fetchVideos();
  }, []);
 

  const loadMoreData = async () => {
    setIsLoading(true)
    const moreData = await getMoreVideo(videoResults.nextPageToken,input);  
    // new Data is combined with the previous and the new data
    const newData = {
      "prevPageToken" : moreData.prevPageToken,
      "nextPageToken" : moreData.nextPageToken,
      "videoList": [...videoResults.videoList, ...moreData.videoList]
    }
    setVideoResults(newData);
    setIsLoading(false);
  };

  return (
    <div>
      <BallDynamic />
      <div className="YouTube-container">

        <div  data-testid="popular-row">
          <PopularRow setVideoResults={setVideoResults} setInput={setInput} input={input}/>
        </div>
        <div 
          className="AIRecommendationContainer"
          data-testid="youtube-airecommendation-row"
          >
          <AIRecommendationRow  setVideoResults={setVideoResults} />
          <BallStatic />
        </div>
        <div data-testid="explore-youtube-row">
          <YouTubeRow videoResults={videoResults} />
        </div>
        <div style={{scale: 0.1, paddingBottom: "10vh", display: "flex", alignContent: "center", justifyContent: "center"}}>
        {isLoading ? <LoadingAnimation /> :<Button sx={{color: "#6ce946"}} onClick={() => loadMoreData()}>
          Load More Data
        </Button>}
      </div>
      </div>
    </div>
  );
}
