// Router setup
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import components for router
import LandingPage from './components/Landing/Landing';
import LoginPage from './components/Login/Login';
import RegistrationPage from './components/Registration/Registration';
import Results from './components/Results/Results';
import Nav from "./components/Navbar/Nav";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/results" component={Results} />
        </Switch>
        <Carousel/>
      </div>
    </Router>
  );
}

export default App;