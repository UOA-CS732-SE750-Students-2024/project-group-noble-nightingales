import "./YouTubeCSS/YouTube.css";
import PopularRow from "../../Components/YouTube/PopularRow/PopularRow";
import AIRecommendationRow from "../../Components/Spotify/AIRecommendationRow/AIRecommendationRow";
import YouTubeRow from "../../Components/YouTube/YouTubeRow/YouTubeRow";
import BallDynamic from "../../Components/BallDynamic/Ball";
import BallStatic from "../../Components/BallStatic/Ball";
import { getYouTubeRandomSearch } from "../../Requests/Youtube/YoutubeRequest";
import { useState, useEffect } from "react";

export default function YouTube() {
  const [videoResults, setVideoResults] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      //TODO: 把这里改成成推荐的function
      try {
        const data = await getYouTubeRandomSearch();
        console.log(data);
        setVideoResults(data.videoList);
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      }
    }
    fetchVideos();
  }, []);

  // const loadMoreData = async () => {
  //   setIsLoading(true)
  //   const moreData = await getMoreMusic(trackResult.nextPage);  // This is a placeholder function
  //   // Update your track results here, for example using a setter function if your state is managed by useState or useContext
  //   const newData = {
  //     "previousPage" : moreData.previousPage,
  //     "nextPage" : moreData.nextPage,
  //     "data": [...trackResult.data, ...moreData.data]
  //   }
  //   setTrackResult(newData);
  //   setIsLoading(false);
  // };

  return (
    <div>
      <BallDynamic />
      <div className="YouTube-container">
        <div data-testid="popular-row">
          <PopularRow setVideoResults={setVideoResults} />
        </div>
        <div
          className="AIRecommendationContainer"
          data-testid="airecommendation-row"
        >
          <AIRecommendationRow />
          <BallStatic />
        </div>
        <div data-testid="explore-youtube-row">
          <YouTubeRow videoResults={videoResults} />
        </div>
      </div>
    </div>
  );
}
