import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage, DashboardPage, MenuPage } from '../pages';

import { API, UserData } from '../data';

export const Routes = ({ user } : { user: UserData }) => {

    return (
        <Switch>
            
            <Route exact path='/'>
                <HomePage user={user} />
            </Route>

            <Route exact path='/docs'>
                <main className='app'>
                    <h1>Docs</h1>
                </main>
            </Route>

            <Route exact path='/dashboard'>
                <MenuPage user={user} />
            </Route>

            <Route exact path='/dashboard/:id'>
                <DashboardPage user={user} />
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