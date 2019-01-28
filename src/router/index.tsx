import React, { Component } from "react";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import Login from '../views/login';
import ChatRoom from '../views/chatroom';
import Publish from '../views/publish';
import CenterMy from '../views/center/center-my';

class BaseRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ChatRoom} />
                    <Route path="/publish" exact component={Publish} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/center/my" exact component={CenterMy} />
                </Switch>
            </Router>
        );
      }
}

export default BaseRouter;
