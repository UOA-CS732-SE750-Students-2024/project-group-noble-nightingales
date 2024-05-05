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
import { getSpotifyRandomResult, getSpotifyPopular } from "../../Requests/Explore/YoutubeSpotifyRequest";



const getTrackUri = (trackId) => {
  return `spotify:track:${trackId}`
}

export default function Spotify() {
  const [searchParams] = useSearchParams();
  let trackId = searchParams.get('trackId');
  if(trackId==null){
    trackId="3FcUIVEdJEqBZfv3BY0ZjN";
  }
  const [currentTrack, setCurrentTrack] = useState(trackId)
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [trackResult, setTrackResult] = useState([]);
  const [currentTrackAuthor, setCurrentTrackAuthor] = useState("");
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
  return (
    <div>
      <BallDynamic />
      <div className="Spotify-container">
        <div>
          <SearchTopRow setCurrentTrack={setCurrentTrack} setTrackResult={setTrackResult}/>
        </div>
        <div>
          <RecommendationRow setCurrentTrack={setCurrentTrack}/>
        </div>
        <div className="RecommendationBall">
          <BallStatic />
        </div>
        <div className="FilterBall">
          <BallStatic />
        </div>
        <div className="AIRecommendationContainer">
          <AIRecommendationRow setTrackResult={setTrackResult}/>
          <BallStatic />
        </div>
        <div className="SpotifyRowContainer">
          <SpotifyRow trackResult={trackResult} setCurrentTrack={setCurrentTrack}/>
          <BallStatic />
        </div>
      </div>
      <div style={{paddingBottom: "10vh"}}>

      </div>
      <SpotifyLoginDialog open={loginDialogOpen} handleClose={() => setLoginDialogOpen(false)}/>
      <Player trackUri={getTrackUri(currentTrack)} setLoginDialogOpen={setLoginDialogOpen} currentTrackAuthor={currentTrackAuthor}/>
    </div>
  );
}
