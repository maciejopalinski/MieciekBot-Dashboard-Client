import { UserData } from '../../data';
import { GuildsWrapper } from '../../components/Dashboard';

export const MenuPage = ({ user } : { user: UserData }) => {

    return (
        <div className='app'>
            <h1>Menu</h1>

            <GuildsWrapper user={user} />
        </div>
    );
}