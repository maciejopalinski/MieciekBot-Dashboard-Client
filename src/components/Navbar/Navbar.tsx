import { Link } from 'react-router-dom';
import { UserData } from '../../data';

import './Navbar.css';
import { Navbar as BSNavbar, Nav as BSNav } from 'react-bootstrap';
import { UserPanel } from './User';

export const Navbar = ({ user } : { user: UserData }) => {
    
    return (
        <BSNavbar
            bg='dark' variant='dark'
            expand='lg'
            className='navbar justify-content-between'
            sticky='top'
        >

            <BSNavbar.Brand href='/' className='navbar-brand'>
                <b>MieciekBot</b>
            </BSNavbar.Brand>

            <BSNavbar.Toggle aria-controls='navbar-collapse' />

            <BSNavbar.Collapse className='navbar-items' id='navbar-collapse'>

                <BSNav className='mr-auto'>
                    <BSNav.Link as={Link} to='/'>Home</BSNav.Link>
                    <BSNav.Link as={Link} to='/'>Docs</BSNav.Link>
                </BSNav>

                <UserPanel user={user} />

            </BSNavbar.Collapse>

        </BSNavbar>
    )
}