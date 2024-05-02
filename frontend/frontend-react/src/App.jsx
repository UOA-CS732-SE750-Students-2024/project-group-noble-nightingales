import LoginPage from "./Pages/LoginPage/Login";
import Nav from "./Components/Nav/Nav";
import Explore from "./Pages/ExplorePage/Explore";
import Spotify from "./Pages/SpotifyPage/Spotify";
import YouTube from "./Pages/YouTubePage/YouTube";
import Signup from "./Pages/SignupPage/Signup";
import Nextstep from "./Pages/NextstepPage/Nextstep";
import SpotifyPlayer from "./Pages/SpotifyPlayPage/SpotifyPlayPage";
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
              <SpotifyPlayer accessToken={"BQCW1HyUUDmnS_gzO5KUWMIrf_zc1YtymHBzOAckdKdjsgPWwJi3bVUHOsoRhota91HinqYwskjB9KGLQLoUyGaTHOp5AwFlyBcN1Lsric_VAEugYEdRr8Sj7Ne1SwjZ5Ex25P8SBmdd5xXrY-CQpcjK-uLLSu-80vq_9-HlaZEEf3-Ju1GjiWaVK4KSbejzeEYqT_9_q2ZGpRkNLNnoBgHYHoJkcQ"} spotifyUri={"spotify:track:6pTKWN96v1dpEaBMzDYlww"}/>
            </>
          }
        />

        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
