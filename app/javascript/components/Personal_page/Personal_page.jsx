import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Popup from 'react-popup';
import PrimarySearchAppBar from '../Primary_searchbar/Primary_searchbar';

class Personal_page extends Component {  
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
        return (
            <div>
                <PrimarySearchAppBar/>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 offset-lg-3">
                            <h1 className="font-weight-normal mb-5">
                                My Profile
                            </h1>
                            <div>
                                {username}
                            </div>
                            <div>
                                {email}
                            </div>
                            <div>
                                followers
                            </div>
                            <div>
                                fans
                            </div>
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
export default Personal_page;