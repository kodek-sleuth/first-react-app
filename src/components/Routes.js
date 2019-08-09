import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Users from './Users/Users';
import User from './Users/User';
import Search from './Users/Search';

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
           <Footer />
         </div>
      </Router>
        )
    }
}

export default Routes
