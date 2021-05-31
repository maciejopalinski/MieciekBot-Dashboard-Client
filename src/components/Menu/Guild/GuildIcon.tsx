import { IGuild } from '../../../data';
import { getGuildIcon } from '../../../utils';
import './GuildIcon.css';

export const GuildIcon = ({ guild } : { guild: IGuild }) => {
    
    if(guild.icon) {
        return (
            <img
                className='guild-icon guild-image'
                src={getGuildIcon(guild, 512)}
                alt={`${guild.name} Icon`}
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