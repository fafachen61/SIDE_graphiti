import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Popup from 'react-popup';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            password: '',
            errors: ''
        };
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault()
        const {username, email, password} = this.state
        let user = {
            username: username,
            email: email,
            password: password
        }
        axios.post('http://localhost:3001/api/v1/login', {user}, {withCredentials: true})
            .then(response => {
                if (response.data.logged_in) {
                    console.log('success')
                    this.props.handleLogin(response.data)
                    this.redirect()
                } else {
                    console.log('failed')
                    console.log(response.data.status)
                    console.log(response.data.errors[0])
                    this.setState({
                        errors: response.data.errors
                    })
                }
            })
            .catch(error => {
                console.log('api errors show:', error.response.data)
                this.handleErrors(error)
            })
    };
    redirect = () => {
        this.props.history.push('/')
    }
    handleErrors = (input_error) => {
        alert('action failed', input_error.response.data);
    };
    render() {
        const {username, email, password} = this.state
        return (
            <div>
                <h1>Log In</h1>        
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />         
                    <button placeholder="submit" type="submit">
                        Log In
                    </button>          
                    <div>
                        or <Link to='/signup'>sign up</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;