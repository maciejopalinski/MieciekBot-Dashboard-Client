import axios from 'axios';
import { BaseDataHandler, API, IGuild } from '.';
import { GuildData } from './Guild';

export class MutualGuildsData extends BaseDataHandler<GuildData[]> {
    
    async handler() {
        const { data } = await axios.get(
            API('/discord/guilds/mutual'), { withCredentials: true }
        );

        const mutual_guilds: IGuild[] = data;

        const guild_data = mutual_guilds.map(g => new GuildData(g));

        return guild_data;
    }

    constructor() {
        super('API_MutualGuilds');
        this.fetch(this.handler);
    }
}