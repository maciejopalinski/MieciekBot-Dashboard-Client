import axios from 'axios';
import { BaseDataHandler, API, GuildData, IGuildConfig } from '.';

export class GuildConfigData extends BaseDataHandler<IGuildConfig> {

    guild: GuildData;

    async handler() {
        const id = this.guild.data?.id;

        const { data } = await axios.get(
            API(`/discord/guilds/${id}/config`), { withCredentials: true }
        );
        return data as IGuildConfig;
    }

    constructor(guild: GuildData) {
        super('API_GuildConfig');
        this.guild = guild;
        this.fetch(this.handler);
    }
}