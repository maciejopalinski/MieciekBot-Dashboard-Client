import { GuildsWrapper } from '../../components';
import { UserData, MutualGuildsData } from '../../data';

export const MenuPage = ({ user } : { user: UserData }) => {

    const mutual_guilds = new MutualGuildsData();

    return (
        <main className='app center'>

            <h1>Menu</h1>

            <GuildsWrapper guilds={mutual_guilds} />

        </main>
    );
}