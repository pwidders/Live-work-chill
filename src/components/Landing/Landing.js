import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegistrationPage from '../Registration/Registration';


// using class allows us to manage state
class LandingPage extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Route path="/register" component={RegistrationPage} />
                </Router>
                <div className="jumbotron">
                        <h1 className="display-4">Live, Work, Chill</h1>
                        <p className="lead">An app that checks rent prices and stuff...</p>
                        <button><Link to="/register">Get Started</Link></button>
                </div>
            </div>

        );
    }
}

export default LandingPage; 