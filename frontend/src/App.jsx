
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/Login'
import Nav from "./Components/Nav/Nav"
import Community from './Pages/CommunityPage/Community';
import Explore from './Pages/ExplorePage/Explore';
import Spotify from './Pages/SpotifyPage/Spotify';
import Youtube from './Pages/YouTubePage/Youtube';
import Signup from './Pages/FakeSignUpPage/Signup';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/explore" />} />
        <Route path="explore" element={<Explore />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/community" element={<><Nav /><Community /></>} />
        <Route path="/spotify" element={<><Nav /><Spotify /></>} />
        <Route path="/youtube" element={<><Nav /><Youtube /></>} />

        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
