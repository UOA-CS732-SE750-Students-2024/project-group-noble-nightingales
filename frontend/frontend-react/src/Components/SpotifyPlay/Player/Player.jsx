import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"
import "./PlayerCSS/Player.css"
import { getSpotifyAccessToken } from "../../../Requests/Spotify/SpotifySignInRequest"
import { AuthContext } from "../../../ApplicationContext"
import { useContext } from "react"

export default function Player({ trackUri, setLoginDialogOpen }) {

  const [play, setPlay] = useState(false)
  
  const [spotifyAccessToken, setSpotifyAccessToken] = useContext(AuthContext);
  

  useEffect(() => setPlay(true), [trackUri])

  // if (!spotifyAccessToken) return null
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      right: 0,
      zIndex: 1000,
      bottom: 0,
      padding: '1vh 0', // Add padding to lift the player from the very edge of the screen
      backgroundColor: '#000',
      opacity: 1,
      boxShadow: '0 -2px 10px rgba(0,0,0,0.2)' // Optional: adds shadow for a "lifted" effect
    }}>
      <div className="animated-divider" style={{width: '100%', backgroundColor: '#17FF7F', height: '0.3vh', }}></div>
      <SpotifyPlayer
        token={1}
        showSaveIcon
        callback={state => {
          if (!state.isPlaying) setPlay(false);
          if (state.error == "Authentication failed"){
            getSpotifyAccessToken("test", setLoginDialogOpen)
          } 
        }}
        play={play}
        uris={["spotify:track:3FcUIVEdJEqBZfv3BY0ZjN"]}
        styles={{ width: '100%', height: '100%', bgColor: 'transparent', activeColor: '#fff', color: '#fff', loaderColor: '#fff',trackArtistColor: '#ccc',
        trackNameColor: '#fff', sliderColor: '#7FFFD4', sliderHandleColor: 'transparent' }} // Ensure the player fills the container
      />
    </div>
  )
}