import { Link, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Nav, NavDropdown } from 'react-bootstrap';
import { AxiosResponse, AxiosError } from 'axios';
import { Spinner, UserAvatar } from '../../';
import { useWindowSize } from '../../../hooks';
import { API, fetchUser, IUser } from '../../../data';
import { getUserTag } from '../../../utils';
import './Panel.css';

export const UserPanel = () => {

    const redirectToLogin = API('/auth/login');
    let [ width ] = useWindowSize();
    let history = useHistory();

    const { data, isLoading, isSuccess } = useQuery<AxiosResponse<IUser>, AxiosError>('/@me', fetchUser, {
        retry: (failureCount, error) => error.response?.status === 429,

        onError: (err) => {
            if (err.response?.status === 401 && window.location.pathname !== '/') {
                console.log('[INFO] Not logged in. Redirecting to /');
                history.push('/');
            }
        }
    });

    if(!isLoading) {
        if(isSuccess) {
            // logged in
            const user = data!.data;

            return (
                <Nav className='user-panel'>
                    <UserAvatar user={user} onClick={() => document.getElementById(user.id)?.click()} />

                    <NavDropdown title={width >= 992 && getUserTag(user)} id={user.id}>

                        <NavDropdown.Item as={Link} to='/dashboard'>Dashboard</NavDropdown.Item>
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
        // still loading
        return <Spinner className='user-panel' />;
    }
}