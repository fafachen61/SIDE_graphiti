import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Images from "../components/Images";
import Image from "../components/Image";
import NewImage from "../components/NewImage";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Settings from "../components/Settings";
import Personal_page from "../components/Personal_page";
import Notification_page from "../components/Notification_page";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/images" exact component={Images} />
      <Route path="/image/:id" exact component={Image} />
      <Route path="/image" exact component={NewImage} />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/settings' component={Settings}/>
      <Route exact path='/personal_page' component={Personal_page}/>
      <Route exact path='/notification_page' component={Notification_page}/>
    </Switch>
  </Router>
);