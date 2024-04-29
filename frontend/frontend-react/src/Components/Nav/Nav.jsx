import "./NavCss/Nav.css";
import Layers from "../../assets/Layers.png";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <NavLink to="/explore">
          <img src={Layers} alt="layer" />
          <span>UoAMedia</span>
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/youtube">YouTube</NavLink>
        </li>
        <li>
          <NavLink to="/spotify">Spotify</NavLink>
        </li>
        <li>
          <NavLink to="/community">Community</NavLink>
        </li>
      </ul>
      <div className="nav-auth">
        <NavLink className="signin" to="/explore/login">
          Sign In
        </NavLink>
        <NavLink to="/explore/signup">Create Account</NavLink>
      </div>
    </div>
  );
}
