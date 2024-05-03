import LoginPage from "./Pages/LoginPage/Login";
import Nav from "./Components/Nav/Nav";
import Explore from "./Pages/ExplorePage/Explore";
import Spotify from "./Pages/SpotifyPage/Spotify";
import YouTube from "./Pages/YouTubePage/YouTube";
import YouTubePlayer from "./Pages/YouTubePlayerPage/YouTubePlayer";
import Signup from "./Pages/SignupPage/Signup";
import Nextstep from "./Pages/NextstepPage/Nextstep";
import SpotifyPlay from "./Pages/SpotifyPlayPage/SpotifyPlayPage.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/explore" />} />
        <Route
          path="explore"
          element={
            <>
              <Nav />
              <Explore />
            </>
          }
        >
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="nextstep" element={<Nextstep />} />
        </Route>
        <Route
          path="/spotify"
          element={
            <>
              <Nav />
              <Spotify />
            </>
          }
        />
        <Route
          path="/youtube"
          element={
            <>
              <Nav />
              <YouTube />
            </>
          }
        />
        <Route
          path="/spotify-play"
          element={
            <>
              <Nav />
              <div style={{height: "20vh"}}></div>
              <SpotifyPlay accessToken={"BQDBfAp_lRRny81Mp0APbhIvuXyzaSgjBTUWIGo0aRE98OqYOlqv4Vv7PeUN0x8zpdeS-7gaiG2wD2thIILuS46ZnEfBlnjQC13vVsQfuYta2FoAORbf3swjFhy7OwuN6vTp6jUKwGWJrojSa42JmfLI0Iic7ZstN-s_fZESwG0H2OEW4FDWd09SVzVg1jYWvZ6uQlxFCQLDUK4hlB_T-xF5ZsAWPVx1Mpq3Vb02RN_uTA"} spotifyUri={"spotify:track:6cmm1LMvZdB5zsCwX5BjqE"}/>
            </>
          }
        />
        <Route
          path="/youtube/player"
          element={
            <>
              <Nav />
              <YouTubePlayer />
            </>
          }
        />

        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
