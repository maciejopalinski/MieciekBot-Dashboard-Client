import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes } from './pages';
import { Navbar } from './components';

import { UserData } from './data';

function App() {

    const user = new UserData();

    return (
        <Router>
            <Navbar user={user} />

            <Routes user={user} />
        </Router>
    );
}

export default App;