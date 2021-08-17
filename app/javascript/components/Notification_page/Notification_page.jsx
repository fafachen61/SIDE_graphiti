import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Popup from 'react-popup';
import PrimarySearchAppBar from '../Primary_searchbar/Primary_searchbar';

class Notification_page extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '' 

        };
    }
    redirect = () => {
        this.props.history.push('/')
    }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleErrors = (input_error) => {
        alert('action failed', input_error.response.data);
    };
    render() {
        const {username, email} = this.state
        const notification_list = ['1','2','3','4','5','6','7','8','9',]
        return (
            <div>
                <PrimarySearchAppBar/>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 offset-lg-3">
                            <h1 className="font-weight-normal mb-5">
                                Notifications
                            </h1>
                            <ul>
                                {notification_list.map(function(notify, index){
                                    return <li key={ index }>{notify}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                    <Link to="/" className="btn btn-link mt-3">
                        Back to homepage
                    </Link>
                </div>
            </div>
        );
    }
}
export default Notification_page;