import axios from 'axios';

import { BaseDataHandler, API, CDN } from './BaseHandler';
import { IGuild } from './Types';

export class GuildData extends BaseDataHandler<IGuild> {

    id: string;

    async handler() {
        const id = this.id;

        const api = await axios.get(
            API(`/discord/guilds/${id}/api`), { withCredentials: true }
        );

        const config = await axios.get(
            API(`/discord/guilds/${id}/config`), { withCredentials: true }
        );

        const guild: IGuild = api.data;
        guild.config = config.data;
        return guild;
    }

    constructor(id: string) {
        super('API_Guild');
        this.id = id;
    }

    hasIcon() {
        if(this.isLoading) return undefined;
        
        return this.data!.icon!.length > 1;
    }

    getIcon(size = 512): string | undefined {
        if(this.isLoading || !this.hasIcon()) return undefined;

        const { id, icon } = this.data!;

        return CDN(`/icons/${id}/${icon}.png?size=${size}`);
    }
}