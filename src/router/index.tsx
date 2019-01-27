import React, { Component } from "react";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import Login from '../views/login';
import ChatRoom from '../views/chatroom';

class BaseRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ChatRoom} />
                    <Route path="/login" exact component={Login} />
                </Switch>
            </Router>
        );
      }
}

export default BaseRouter;
