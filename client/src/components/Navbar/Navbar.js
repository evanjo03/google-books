import React from "react";
import { Link } from "react-router-dom";
import "./hover.css"


function Navbar() {
  return (
    <ul style={{ backgroundColor: "white" }} className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" style={{ color: "black" }}>
        <h3 className="nav-link" style={{ color: "#4285F4", fontWeight: 700, margin: "0px 0px 0px 0px" }}>Google Books</h3>
        </Link>
      </li>
    <li className="nav-item">
      <Link to="/" style={{ color: "black", padding: "5px", margin: "5px" }} className= "nav-link" >
        Search
        </Link>
    </li>
    <li className="nav-item">
      <Link to="/saved" style={{ color: "black", padding: "5px", margin: "5px" }} className="nav-link">
        Saved
        </Link>
    </li>
    <li className="nav-item">
      <a href="https://github.com/evanjo03/google-books" rel="noopener noreferrer" target="_blank" style={{ color: "black", padding: "5px", margin: "5px" }} className="nav-link">
        Github
        </a>
      </li>
    </ul>
  );
}

export default Navbar;