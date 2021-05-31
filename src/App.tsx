import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes } from './pages';
import { Navbar } from './components';

function App() {

    return (
        <Router>
            <Navbar />

            <Routes />
        </Router>
    );
}

export default App;