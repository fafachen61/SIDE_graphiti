import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Popup from 'react-popup';
import PrimarySearchAppBar from './Primary_searchbar';

class Settings extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            preferences: ''            
        };
    }
    redirect = () => {
        this.props.history.push('/')
    }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit(event) {
        event.preventDefault();
        console.log('not written yet');
        alert('sorry , this part is not implemented yet.');
        ///////////////////////////////
        ///////to be implemented
        ///////////////////////////////
    }
    handleErrors = (input_error) => {
        alert('action failed', input_error.response.data);
    };
    render() {
        //const {username, email, password} = this.state
        return (
            <div>
                <PrimarySearchAppBar/>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 offset-lg-3">
                            <h1 className="font-weight-normal mb-5">
                            Personal information
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="user_nickname">nick name</label>
                                    <input
                                    type="text"
                                    name="nickname"
                                    id="user_nickname"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                    />
                                </div>
                                
                                
                                <button type="submit" className="btn custom-button mt-3">
                                    submit change
                                </button>
                                <Link to="/" className="btn btn-link mt-3">
                                    Back to homepage
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Settings;