import React from "react";
import { Link } from "react-router-dom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import "./nav.css";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="container">
        <div className="logo">
          <span className="icon">
            <GraphicEqIcon />
          </span>
          <span className="name">Telegraph</span>
        </div>
        <menu>
          <ul>
            <li>
              <Link to="/" className="link_item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="link_item">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="link_item">
                Register
              </Link>
            </li>
          </ul>
        </menu>
      </div>
    </nav>
  );
};

export default Navbar;
