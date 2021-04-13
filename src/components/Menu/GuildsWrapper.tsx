import { MutualGuildsData } from '../../data';
import { Guild, Spinner } from '../';

import './GuildsWrapper.css';

export const GuildsWrapper = ({ guilds } : { guilds: MutualGuildsData }) => {

    if(guilds.isSuccess) {
        // logged in
        return (
            <div className='guilds'>
                {guilds.data!.map(g => (
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