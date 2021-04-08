import { Link } from 'react-router-dom';
import { API, UserData } from '../../../data';

import { Nav, NavDropdown, Spinner } from 'react-bootstrap';
import { UserAvatar } from './Avatar';

export const UserPanel = ({ user } : { user: UserData }) => {

    const redirectToLogin = API('/auth');

    if(!user.isLoading) {
        if(user.isSuccess) {
            // logged in
            return (
                <Nav>
                    <UserAvatar user={user} />
                    <NavDropdown title={user.getTag()} id={user.data!.id}>
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
                <Nav>
                    <Nav.Link href={redirectToLogin}>Login</Nav.Link>
                </Nav>
            );
        }
    }
    else {
        // loading
        return (
            <Spinner animation='border' role='status'>
                <span className='sr-only'>Loading...</span>
            </Spinner>
        );
    }
}