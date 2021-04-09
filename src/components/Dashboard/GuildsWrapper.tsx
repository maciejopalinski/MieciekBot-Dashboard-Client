import { GuildData, UserData } from "../../data";
import { Guild } from './Guild';

import { Spinner } from 'react-bootstrap';

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
        return (
            <Spinner animation='border' role='status'>
                <span className='sr-only'>Loading...</span>
            </Spinner>
        );
    }
}