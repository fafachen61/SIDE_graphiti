import React, { Component } from 'react';
import Routes from "../routes/Index";
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn: false,
            user: {}
        };
    }
    componentDidMount() {
        this.loginStatus()
    }
    loginStatus = () => {
        axios.get('http://localhost:3001/logged_in', {withCredentials: true})    
        .then(response => {
            if (response.data.logged_in) {
                this.handleLogin(response)
            } else {
                this.handleLogout()
            }
        })
        .catch(error => console.log('api errors app:', error))
        }
    handleLogin = (data) => {
        this.setState({
            isLoggedIn: true,
            user: data.user
        })
        console.log('login handlled')
    }
    handleLogout = () => {
        this.setState({
        isLoggedIn: false,
        user: {}
        })
    }
    
    render() {
      return (
        <>{Routes}</>
      );
    }
  }
export default App;