import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Users from './Users/Users.jsx';
import User from './Users/User.jsx';
import Search from './Users/Search.jsx';

class Routes extends Component {
    render() {
        return (
        <Router>
            <div className="App">
            <Navbar />
            <Switch>
                <Route exact path='/search' component={Search} />
                <Route exact path='/' component={Users}/>
                <Route exact path='/user/:login' component={User}/>
             </Switch>
         </div>
      </Router>
        )
    }
}

export default Routes
