import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage, DashboardPage, MenuPage } from '../pages';

import { API } from '../data';

export const Routes = () => {

    return (
        <Switch>
            
            <Route exact path='/'>
                <HomePage />
            </Route>

            <Route exact path='/dashboard'>
                <MenuPage />
            </Route>

            <Route exact path='/dashboard/:id'>
                <DashboardPage />
            </Route>

            <Route exact path='/logout' component={() => {
                window.location.href = API('/auth/logout');
                return null;
            }}/>

            <Route path='*'>
                <Redirect to='/' />
            </Route>

        </Switch>
    );
}