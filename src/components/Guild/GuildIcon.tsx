import React from 'react';
import { GuildInfo, getGuildIcon } from '../../util';

export function GuildIcon({ guild } : { guild: GuildInfo }) {

    if(guild.icon) {
        return (
            <img
                className='guild-icon guild-image'
                src={getGuildIcon(guild.id, guild.icon, 512)}
                alt=''
            />
        );
    }
    else {
        return (
            <div className='guild-icon guild-acronym'>
                {guild.name.split(' ').map(v => v[0]).join('')}
            </div>
        );
    }
}