import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
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
        const {username, email, password, password_confirmation} = this.state
        let user = {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
        axios.post('http://localhost:3001/api/v1/users', {user}, {withCredentials: true})
            .then(response => {
                if (response.data.status === 'created') {
                    console.log('succeed')
                    //this.props.handleLogin(response.data)
                    this.redirect()
                } else {
                    console.log('failed')
                    console.log(response.data.status)
                    console.log(response.data.errors)
                    alert(response.data.errors)
                    this.setState({
                        errors: response.data.errors
                    })
                }
            })
            .catch(error => console.log('api errors signup:', error.response.data))
    };
    redirect = () => {
        console.log('redirecting')
        this.props.history.push('/')
    }
    handleErrors = () => {
        return (
            <div>
                <ul>
                {this.state.errors.map((error) => {
                    return <li key={error}>{error}</li>
                })}
                </ul> 
            </div>
        )
    };
    render() {
        const {username, email, password, password_confirmation} = this.state
        return (
        <div>
            <h1>Sign Up</h1>        
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
                <input
                    placeholder="password confirmation"
                    type="password"
                    name="password_confirmation"
                    value={password_confirmation}
                    onChange={this.handleChange}
                />
                
                <button placeholder="submit" type="submit">
                    Sign Up
                </button>
                <div>
                    Already signed up?  
                    <Link to='/login'>log in</Link>
                </div>
        
            </form>
        </div>
        );
    }
}
export default Signup;