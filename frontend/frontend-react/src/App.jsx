import LoginPage from "./Pages/LoginPage/Login";
import Nav from "./Components/Nav/Nav";
import Explore from "./Pages/ExplorePage/Explore";
import Spotify from "./Pages/SpotifyPage/Spotify";
import YouTube from "./Pages/YouTubePage/YouTube";
import Signup from "./Pages/SignupPage/Signup";
import Nextstep from "./Pages/NextstepPage/Nextstep";
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

        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
