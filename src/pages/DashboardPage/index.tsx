/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { match } from 'react-router-dom';

import { getUserDetails, getMutualGuilds, GuildInfo, User } from '../../util';

import { Navbar, GuildDashboard } from '../../components';

type Props = {
    history: any;
    match: match<{ id: string }>;
}

export const DashboardPage = ({ history, match } : Props) => {
    
    const [ user, setUser ] = React.useState<User>();
    const [ guilds, setGuilds ] = React.useState<GuildInfo[]>();
    const [ currentGuild, setCurrentGuild ] = React.useState<GuildInfo>();

    React.useEffect(() => {
        
        getUserDetails()
        .then(res => setUser(res))
        .catch(err => {
            setUser(null as any);
            history.push('/');
        });
        
        getMutualGuilds()
        .then(res => {
            setGuilds(res);
            setCurrentGuild(res.find(v => v.id === match.params.id));
        })
        .catch(err => {
            setGuilds([]);
        });

    }, []);

    return (
        <div>
            <Navbar user={user} />
            
            <div className='app'>
                <h1>Dashboard Page</h1>

                <GuildDashboard guild={currentGuild} />
            </div>
        </div>
    );
}