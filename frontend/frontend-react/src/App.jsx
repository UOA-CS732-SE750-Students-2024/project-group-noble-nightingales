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
              <div style={{height: "20vh"}}></div>
              <SpotifyPlayer accessToken={"BQB05Hcf-gcYL76Xgr6Xa37J8f56j27TX7fE1GxPwc1JwfWqaDC5OnFfHfc3drvVzNctr3lRK3nEF5N8udWNnR2b3lPN8zTyPiRfivU0kXquSap-HABB0e9YnKga5MAnzq3iDk0JNA0JOhJ6p9OPY4S9inlQQoO14OFq_TS44V6G7CVaYSfJTxr9q7R4Bp0302u6098KmFcfjhMW8CUSx2yjZWW0rG-Fn7TrYtUAmyohEg"} spotifyUri={"spotify:track:6cmm1LMvZdB5zsCwX5BjqE"}/>
            </>
          }
        />

        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
