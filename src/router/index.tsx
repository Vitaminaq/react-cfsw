import React, { Component } from "react";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import Login from '../views/login';
import ChatRoom from '../views/chatroom';
import Publish from '../views/publish';
import CenterMy from '../views/center/center-my';

class BaseRouter extends Component {
    render() {
        return (
            <Router basename="/">
                <Switch>
                    <Route exact path="/" component={ChatRoom} />
                    <Route exact path="/publish" component={Publish} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/center/my" component={CenterMy} />
                </Switch>
            </Router>
        );
      }
}

export default BaseRouter;
