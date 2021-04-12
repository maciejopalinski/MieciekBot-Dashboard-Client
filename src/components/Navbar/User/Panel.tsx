import { Link } from 'react-router-dom';
import { useWindowSize } from '../../../hooks';
import { API, UserData } from '../../../data';

import { Nav, NavDropdown } from 'react-bootstrap';
import { Spinner, UserAvatar } from '../../';

import './Panel.css';

export const UserPanel = ({ user } : { user: UserData }) => {

    const redirectToLogin = API('/auth');
    let [ width ] = useWindowSize();

    if(!user.isLoading) {
        if(user.isSuccess) {
            // logged in
            return (
                <Nav className='user-panel'>
                    <UserAvatar user={user} onClick={() => document.getElementById(user.data!.id)?.click()} />

                    <NavDropdown title={width >= 992 && user.getTag()} id={user.data!.id}>
                        {/* className='d-none d-lg-block' */}

                        <NavDropdown.Item as={Link} to='/dashboard'>Dashboard</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/@me'>Your data</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/logout' className='logout'>Logout</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
            )
        }
        else {
            // not logged in
            return (
                <Nav className='user-panel'>
                    <Nav.Link href={redirectToLogin}>Login</Nav.Link>
                </Nav>
            );
        }
    }
    else {
        // loading
        return <Spinner className='user-panel' />;
    }
}