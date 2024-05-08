import "./NavCss/Nav.css";
import Layers from "../../assets/Layers.png";
import { NavLink } from "react-router-dom";
import BackToLoginDialog from "../../Dialogs/General/BackToLoginDialog";
import { useContext, useState } from "react";
import { AuthContext } from "../../ApplicationContext";

export default function Nav() {

  const [,,,,isAuthenticated] = useContext(AuthContext)
  const [open, setOpen] = useState(false);

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
          <NavLink to={"/explore"}>Explore</NavLink>
        </li>
        <li>
          <NavLink to={isAuthenticated ? "/youtube" : ""} onClick={() => {
            if (!isAuthenticated) {
              setOpen(true);
            }
          }}>YouTube</NavLink>
        </li>
        <li>
          <NavLink to={isAuthenticated ? "/spotify" : ""} onClick={() => {
            if (!isAuthenticated) {
              setOpen(true);
            }
          }}>Spotify</NavLink>
        </li>
      </ul>
      <div className="nav-auth">
        <NavLink className="signin" to="/explore/login">
          Sign In
        </NavLink>
        <NavLink to="/explore/signup">Create Account</NavLink>
      </div>
      <BackToLoginDialog open={open} handleClose={() => setOpen(false)}/>
    </div>
  );
}
