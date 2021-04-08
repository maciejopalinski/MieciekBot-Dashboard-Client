import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar as BSNavbar, Nav as BSNav } from 'react-bootstrap';
import './Navbar.css';

export const Navbar = ({ user } : { user?: any }) => {
    
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

                {/* <User user={user} /> */}

            </BSNavbar.Collapse>

        </BSNavbar>
    )
}