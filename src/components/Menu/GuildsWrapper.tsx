import { GuildData, UserData } from '../../data';
import { Guild, Spinner } from '../';

import './GuildsWrapper.css';

export const GuildsWrapper = ({ user } : { user: UserData }) => {

    if(user.isSuccess) {
        user.mutual_guilds = user.data!.mutual_guilds!.map(g => new GuildData(g));
    }

    if(user.isSuccess) {
        // logged in
        return (
            <div className='guilds'>
                {user.mutual_guilds.map(g => (
                    <Guild guild={g} key={g.data!.id} />
                ))}
            </div>
        );
    }
    else {
        // loading
        return <Spinner />;
    }
}