import React, {Component} from 'react';
import  "../Login/Login.css"

// Axios allows users to send HTTP requests from the front-end of our application to a server
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        // This block of code is needed to grant access to the state for the following methods listed below
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
        }
    }

    // Form handling functions
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({  
            password: e.target.value
        })
    }

    render () {
        return (
            <div className= "container">
                <div style= {{marginTop: 20}}>
                    <h3 className="login">Please Enter Login Info</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>E-mail: </label>
                            <input 
                                type="email" 
                                className="form-control" 
                                value={this.state.email} 
                                onChange={this.onChangeEmail}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.password} 
                                onChange={this.onChangePassword}
                            />
                        </div>
                        
                        <div className="form-group">
                            <input 
                                type="submit"
                                value="Log In"
                                className="btn btn-primary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login;