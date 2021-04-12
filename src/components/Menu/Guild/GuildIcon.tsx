import { GuildData } from '../../../data/GuildData';

import './GuildIcon.css';

export const GuildIcon = ({ guild } : { guild: GuildData }) => {
    
    if(guild.hasIcon()) {
        return (
            <img
                className='guild-icon guild-image'
                src={guild.getIcon(512)}
                alt={`${guild.data?.name} Icon`}
            />
        );
    }
    else {
        return (
            <div className='guild-icon guild-acronym'>
                {guild.data?.name.split(' ').map(v => v[0]).join('')}
            </div>
        );
    }
}