import React, { Component } from 'react';
// Router setup
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import components for router
import LandingPage from './components/Landing/Landing';
import LoginPage from './components/Login/Login';
import RegistrationPage from './components/Registration/Registration';
import Results from './components/Results/Results';
import SurveyPage from './components/Survey/Survey';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Live-Work-Chill</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Get Started</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/survey" component={SurveyPage} />
        <Route path="/results" component={Results} />
      </div>
    </Router>
    );
  }
}

export default App;