import React, {Component} from 'react';
import  "../Registration/Registration.css"
// Axios allows users to send HTTP requests from the front-end of our application to a server
import axios from 'axios';

class CreateUser extends Component {
    constructor(props) {
        super(props);

        // This block of code is needed to grant access to the state for the following methods listed below
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangeZipCode = this.onChangeZipCode.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeIncome = this.onChangeIncome.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:'',
            confirm_password:'',
            name: '',
            job_title: '',
            zip_code: '',
            city: '',
            income: ''
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
    onChangeConfirmPassword(e) {
        this.setState({
            confirm_password: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeJobTitle(e) {
        this.setState({
            job_title: e.target.value
        })
    }

    onChangeZipCode(e) {
        this.setState({
            zip_code: e.target.value
        })
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    onChangeIncome(e) {
        this.setState({
            income: e.target.value
        })
    }

    // Form submit function
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted: `);
        console.log(`Name: ${this.state.name}`);
        console.log(`Job title: ${this.state.job_title}`);
        console.log(`Zip code: ${this.state.zip_code}`);
        console.log(`City: ${this.state.city}`);
        console.log(`Annual Household Salary: ${this.state.income}`);

        // Submit data to server
        // create object that contains the values from the form
        // const newTodo = {
        //     todo_description: this.state.todo_description,
        //     todo_responsible: this.state.todo_responsible,
        //     todo_priority: this.state.todo_priority,
        //     todo_completed: this.state.todo_completed
        // }

    }

    //     // Submit data to server
    //     // create object that contains the values from the form
    //     const newTodo = {
    //         todo_description: this.state.todo_description,
    //         todo_responsible: this.state.todo_responsible,
    //         todo_priority: this.state.todo_priority,
    //         todo_completed: this.state.todo_completed
    //     }

    //     // With value attained in newTodo, make Axios call
    //     axios.post('http://localhost:4000/todos/add', newTodo)
    //         .then(res => console.log(res.data));

    //     this.setState({
    //         todo_description: '',
    //         todo_responsible: '',
    //         todo_priority: '',
    //         todo_completed: false
    //     })
    // }

    render () {
        return (
            <div className= "container">
                <div style= {{marginTop: 20}}>
                    <h3 className="register">Please Register to Get Your Local Data Results</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.name} 
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input 
                                type="text" 
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
                            <label>Confirm Password: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.confirm_password} 
                                onChange={this.onChangeConfirmPassword}
                            />
                        </div>
                        <div className="form-group">
                            <label>Job title: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.job_title} 
                                onChange={this.onChangeJobTitle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Zip Code: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.zip_code} 
                                onChange={this.onChangeZipCode}
                            />
                        </div>
                        <div className="form-group">
                            <label>City: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.city} 
                                onChange={this.onChangeCity}
                            />
                        </div>
                        <div className="form-group">

                            <label>Annual Household Income: </label>

                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.income} 
                                onChange={this.onChangeIncome}
                            />
                        </div>
                        
                        <div className="form-group">
                            <input 
                                type="submit"

                                value="See Data"

                                className="btn btn-primary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateUser;