import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "../Navbar/Nav.css"


function Nav() {
  return (
   <div className="navBar">
    <nav className="navbar navbar-expand-lg navbar">
    
      <a className="navbar-brand" href="/">
      <img alt="logo" src="../assets/photos/logo7.png" className="logo" width="248px;" height="132px;"></img>
      </a>
      <div className="collapse navbar-collapse">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home<i class="fa fa-home"></i></Link>
            </li>
            
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login <i class="fa fa-user-plus"></i></Link>
            </li>
            <li className="nav-item">
              <Link to="/learn" className="nav-link">About <i class="fa fa-info"></i></Link>
            </li>
          </ul>
        </div>
    </nav>
    </div>
    
  );
}

export default Nav;