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
              <SpotifyPlayer accessToken={"BQD0zkxF3WUB0KT2ECd6znK3Kb6ZuV1YQeWZ3hx1NIfMULKqkrHB1qAWU8IjyYF-p45CA7O_hidctlqULEbYVzlvOmevUuphva-x_qh9G5_eDghyog_UPL3X8fLH7sqxz4c-4BrEQlShwRuuVz5IKiD8UXA5sMPRuA0ongYApEAGt3vM6HL0mYMj4DhalVjswbY0o75mg1-caSlWXB1u8bCQakC7G9MLYk4r8W5k7ugabw"} spotifyUri={"spotify:track:6cmm1LMvZdB5zsCwX5BjqE"}/>
            </>
          }
        />

        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
