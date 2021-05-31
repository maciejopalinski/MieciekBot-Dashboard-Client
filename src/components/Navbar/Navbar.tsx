import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BSNavbar, Nav as BSNav } from 'react-bootstrap';
import { UserPanel } from './User';
import './Navbar.css';

export const NavEntry = ({ href, children } : { href: string, children?: ReactNode }) => {
    return (
        <BSNav.Link as={Link} to={href} href={href}>
            {children}
        </BSNav.Link>
    );
}

export const Navbar = () => {

    let location = useLocation();

    return (
        <BSNavbar
            bg='dark' variant='dark'
            expand='lg'
            className='navbar justify-content-between'
            sticky='top'
        >

                <BSNavbar.Toggle aria-controls='navbar-collapse' />

                <BSNavbar.Brand as={Link} to='/' className='navbar-brand'>
                    <b>MieciekBot</b>
                </BSNavbar.Brand>

                <UserPanel />

                <BSNavbar.Collapse className='navbar-items' id='navbar-collapse'>
                    <BSNav className='mr-auto' activeKey={location.pathname}>
                        <NavEntry href='/'>Home</NavEntry>
                        <NavEntry href='/dashboard'>Dashboard</NavEntry>
                    </BSNav>
                </BSNavbar.Collapse>

        </BSNavbar>
    )
}