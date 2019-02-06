import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegistrationPage from '../Registration/Registration';
import "../Landing/Landing.css"

// using class allows us to manage state
class LandingPage extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Route path="/register" component={RegistrationPage} />
                </Router>
                <div className="jumbotron">
                        <h1 className="display-4">Live Work Chill</h1>
                        <p className="lead">An app that helps you find a home</p>
                        <p className="lead1"> that's worthy of your hard work</p>
                        <div className="button">
                        <button ><Link className="button1"  to="/register">Get Started</Link></button>
                        </div>
    
                </div>
            </div>
            


        );
    }
}

export default LandingPage; 