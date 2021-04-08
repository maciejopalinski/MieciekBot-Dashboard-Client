import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from './pages';
import { Navbar } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { UserData } from './data';


function App() {

    const user = new UserData();

    return (
        <Router>
            <Navbar />

            <Switch>
                
                <Route exact path='/'>
                    <HomePage user={user} />
                </Route>

                <Route path='*'>
                    <Redirect to='/' />
                </Route>
            
            </Switch>
        </Router>
    );
}

export default App;