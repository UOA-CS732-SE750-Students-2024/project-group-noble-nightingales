import "./SpotifyCSS/Spotify.css";
import SearchTopRow from "../../Components/Spotify/SearchTopRow/SearchTopRow";
import RecommendationRow from "../../Components/Spotify/RecommendationRow/RecommendationRow";
import AIRecommendationRow from "../../Components/Spotify/AIRecommendationRow/AIRecommendationRow";
import SpotifyRow from "../../Components/Spotify/SpotifyRow/SpotifyRow";
import BallDynamic from "../../Components/BallDynamic/Ball";
import BallStatic from "../../Components/BallStatic/Ball";
import SpotifyLoginDialog from "../../Dialogs/Spotify/SpotifyLoginDialog";
import Player from "../../Components/SpotifyPlay/Player/Player";
import { useState} from "react";
import { useSearchParams } from 'react-router-dom';
import { useEffect } from "react";
import { getSpotifyRandomResult, getSpotifyPopular, getMoreMusic } from "../../Requests/Explore/YoutubeSpotifyRequest";
import { Button } from "@mui/material";
import LoadingAnimation from "../../Dialogs/Spotify/LoadingAnimation";



const getTrackUri = (trackId) => {
  return `spotify:track:${trackId}`
}

export default function Spotify() {
  const [searchParams] = useSearchParams();
  let trackId = searchParams.get('trackId');
  if(trackId==null){
    trackId="0tgVpDi06FyKpA1z0VMD4v";
  }
  const [currentTrack, setCurrentTrack] = useState(trackId)
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [trackResult, setTrackResult] = useState([]);
  const [currentTrackAuthor, setCurrentTrackAuthor] = useState("");
  const [open, setOpen] = useState(false);
  const [recommendationChange, setRecommendationChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchTracks() {
      try {
        const data = await getSpotifyRandomResult(); 
        console.log(data);
        setTrackResult(data);  
      } catch (error) {
        console.error('Failed to fetch tracks:', error);
      }
    }
    fetchTracks();
  }, []);

  const loadMoreData = async () => {
    setIsLoading(true)
    const moreData = await getMoreMusic(trackResult.nextPage);  // This is a placeholder function
    // Update your track results here, for example using a setter function if your state is managed by useState or useContext
    const newData = {
      "previousPage" : moreData.previousPage,
      "nextPage" : moreData.nextPage,
      "data": [...trackResult.data, ...moreData.data]
    }
    setTrackResult(newData);
    setIsLoading(false);
  };


  return (
    <div>
      <BallDynamic />
      <div className="Spotify-container">
        <div>
          <SearchTopRow setCurrentTrack={setCurrentTrack} setTrackResult={setTrackResult} setOpen={setOpen}/>
        </div>
        <div>
          <RecommendationRow setCurrentTrack={setCurrentTrack} recommendationChange={recommendationChange}/>
        </div>
        <div className="RecommendationBall">
          <BallStatic />
        </div>
        <div className="FilterBall">
          <BallStatic />
        </div>
        <div className="AIRecommendationContainer">
          <AIRecommendationRow setTrackResult={setTrackResult} open={open} setOpen={setOpen} recommendationChange={recommendationChange} setRecommendationChange={setRecommendationChange}/>
          <BallStatic />
        </div>
        <div className="SpotifyRowContainer">
          <SpotifyRow trackResult={trackResult} setCurrentTrack={setCurrentTrack} setIsLoading={setIsLoading} setTrackResult={setTrackResult} isLoading={isLoading}/>
          <BallStatic />
        </div>
      </div>
      <div style={{scale: 0.1, paddingBottom: "10vh", display: "flex", alignContent: "center", justifyContent: "center"}}>
        {isLoading ? <LoadingAnimation /> :<Button sx={{color: "#6ce946"}} onClick={() => loadMoreData()}>
          Load More Data
        </Button>}
      </div>
      <SpotifyLoginDialog open={loginDialogOpen} handleClose={() => setLoginDialogOpen(false)}/>
      <Player trackUri={getTrackUri(currentTrack)} setLoginDialogOpen={setLoginDialogOpen} currentTrackAuthor={currentTrackAuthor}/>
    </div>
  );
}
