import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/main_logo.jpg";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <img src={logo} alt="Logo" />
        <h1 className="display-4">Graffiti Homepage</h1>
        <p className="lead">
          click in to view all image
        </p>
        <hr className="my-4" />
        <Link
          to="/images"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Images
        </Link>
      </div>
      <div className="container secondary-color">
        <Link 
          to='/login'
          className="btn btn-lg custom-button"
          role="button"
        >
          Log In
        </Link>
        <Link 
          to='/signup'
          className="btn btn-lg custom-button"
          role="button"
        >
          Sign Up
        </Link>
      </div>

      <div>
        <h2>
          developement use
        </h2>
        <Link to='/personal_page'>Shortcut to personal page</Link>
        <br></br>
        <Link to='/notification_page'>Shortcut to notification</Link>
        <br></br>
        <Link to='/settings'>Shortcut to settings</Link>

      </div>
      
    </div>
    
        
  </div>
);