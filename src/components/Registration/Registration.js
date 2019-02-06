import React, {Component} from 'react';
import  "../Registration/Registration.css"
// Axios allows users to send HTTP requests from the front-end of our application to a server
import axios from 'axios';

class CreateUser extends Component {
    constructor(props) {
        super(props);

        // This block of code is needed to grant access to the state for the following methods listed below
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangeZipCode = this.onChangeZipCode.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeIncome = this.onChangeIncome.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            job_title: '',
            zip_code: '',
            city: '',
            income: ''
        }
    }

    // Form handling functions
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

    // // Form submit function
    // onSubmit(e) {
    //     e.preventDefault();

    //     console.log(`Form submitted: `);
    //     console.log(`Todo Description: ${this.state.todo_description}`);
    //     console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    //     console.log(`Todo Priority: ${this.state.todo_priority}`);
    //     console.log(`Todo Completed: ${this.state.todo_completed}`);

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
                            <label>Income: </label>
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
                                value="Submit"
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