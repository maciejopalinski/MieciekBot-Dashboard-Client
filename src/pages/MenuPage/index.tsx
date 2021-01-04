/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { getUserDetails, getMutualGuilds, GuildInfo, User } from '../../util';

import { Navbar, GuildsWrapper } from '../../components';

type Props = {
    history: any;
}

export const MenuPage = ({ history } : Props) => {

    const [ user, setUser ] = React.useState<User>();
    const [ guilds, setGuilds ] = React.useState<GuildInfo[]>();

    React.useEffect(() => {
        
        getUserDetails()
        .then(res => setUser(res))
        .catch(err => {
            setUser(null as any);
            history.push('/');
        });
        
        getMutualGuilds()
        .then(res => setGuilds(res))
        .catch(err => {
            setGuilds([]);
        });

    }, []);

    return (
        <div>
            <Navbar user={user} />
            
            <div className='app'>
                <h1>Select a server</h1>

                <GuildsWrapper guilds={guilds} />
            </div>
        </div>
    );
}