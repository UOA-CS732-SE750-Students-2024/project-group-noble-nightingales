import LoginPage from "./Pages/LoginPage/Login";
import Nav from "./Components/Nav/Nav";
import Explore from "./Pages/ExplorePage/Explore";
import Spotify from "./Pages/SpotifyPage/Spotify";
import YouTube from "./Pages/YouTubePage/YouTube";
import YouTubePlayer from "./Pages/YouTubePlayerPage/YouTubePlayer";
import Signup from "./Pages/SignupPage/Signup";
import Nextstep from "./Pages/NextstepPage/Nextstep";
import Comment from "./Pages/CommentPage/Comment";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SpotifySignIn from "./Pages/SpotifySignInPage/SpotifySignIn.jsx";
import { useContext } from "react";
import { AuthContext } from "./ApplicationContext.jsx";

function App() {

  const [,,,,isAuthenticated] = useContext(AuthContext)

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
          path={isAuthenticated ? "/spotify" : "/explore"}
          element={
            <>
              <Nav />
              <Spotify />
            </>
          }
        />
        <Route
          path={isAuthenticated ? "/youtube" : "/explore"}
          element={
            <>
              <Nav />
              <YouTube />
            </>
          }
        />
        <Route
          path={isAuthenticated ? "/youtube/player" : "/explore"}
          element={
            <>
              <Nav />
              <YouTubePlayer />
            </>
          }
        />
        <Route
          path={isAuthenticated ? "/comments" : "/explore"}
          element={
            <>
              <Nav />
              <YouTubePlayer />
              <Comment />
            </>
          }
        />
        <Route
          path={isAuthenticated ? "/spotify/signin" : "/explore"}
          element={
            <>
              <Nav />
              <SpotifySignIn />
            </>
          }
        />

        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
