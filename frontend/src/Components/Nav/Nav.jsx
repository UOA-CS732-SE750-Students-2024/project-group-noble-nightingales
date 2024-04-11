import React from 'react';
import { NavLink } from 'react-router-dom';
import Layers from '../../assets/Layers.png';
import './NavCss/Nav.css';

export default function Nav() {
  return (
    <div className="nav-container">
        <div className="nav-logo">
          <NavLink to="/explore">
            <img src={Layers} alt="layer"  />
            <span>UoAMedia</span>
          </NavLink>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/explore">Explore</NavLink></li>
          <li><NavLink to="/youtube">YouTube</NavLink></li>
          <li><NavLink to="/spotify">Spotify</NavLink></li>
          <li><NavLink to="/community">Community</NavLink></li>
        </ul>
        <div className="nav-auth">
          <NavLink className="signin"to="/login">Sign In</NavLink>
          <NavLink to="/signup">Create Account</NavLink>
        </div>
    </div>
  );
}
