import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import classes from "../Navbar/Nav.css"


function Nav() {
  return (
   <div className="navBar">
    <nav className="navbar navbar-expand-lg navbar">
    
      <a className="navbar-brand" href="/">
      <img alt="logo" src="../assets/photos/logo7.png" class="logo" width="240px;" height="130px;"></img>
      
      </a>
      <div className="collapse navbar-collapse">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/learn" className="nav-link">Learn</Link>
            </li>
          </ul>
        </div>
    </nav>
    </div>
    
  );
}

export default Nav;