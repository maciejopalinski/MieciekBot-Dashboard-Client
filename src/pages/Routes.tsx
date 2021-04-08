import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { HomePage } from '../pages';

import { API, UserData } from '../data';

export const Routes = ({ user } : { user: UserData }) => {

    return (
        <Switch>
            
            <Route exact path='/'>
                <HomePage user={user} />
            </Route>

            <Route exact path='/dashboard'>
                <HomePage user={user} />
            </Route>

            <Route exact path='/@me' component={(): any => {
                window.location.href = API('/discord/@me');
            }} />

            <Route exact path='/logout' component={(): any => {
                window.location.href = API('/auth/logout');
            }} />

            <Route path='*'>
                <Redirect to='/' />
            </Route>

        </Switch>
    );
}