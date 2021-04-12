import { UserData } from '../../data';
import { GuildsWrapper } from '../../components';

export const MenuPage = ({ user } : { user: UserData }) => {

    return (
        <main className='app'>

            <h1>Menu</h1>

            <GuildsWrapper user={user} />

        </main>
    );
}