import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserData } from './data';

import { Routes } from './pages';
import { Navbar } from './components';

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