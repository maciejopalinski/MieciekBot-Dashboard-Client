import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages';
import { Navbar } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    
    return (
        <Router>
            
            <Navbar />

            <Switch>
                
                <Route exact path='/'>
                    <HomePage />
                </Route>
            
            </Switch>
        </Router>
    );
}

export default App;