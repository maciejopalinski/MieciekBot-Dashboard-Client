import axios from 'axios';
import { BaseDataHandler, API, CDN, GuildData, IUser } from '.';

export class UserData extends BaseDataHandler<IUser> {
    
    mutual_guilds: GuildData[] = [];

    async handler() {
        const { data } = await axios.get(
            API('/discord/@me'), { withCredentials: true }
        );
        return data as IUser;
    }

    constructor() {
        super('API_User');
        this.fetch(this.handler);
    }

    getAvatar(size = 512) {
        if(this.isLoading) return undefined;
        
        let { id, avatar, discriminator } = this.data!;
        
        if(!avatar) return CDN(`/embed/avatars/${+discriminator % 5}.png?size=${size}`);
        else return CDN(`/avatars/${id}/${avatar}.jpg?size=${size}`);
    }

    getTag() {
        if(this.isLoading) return undefined;

        let { username, discriminator } = this.data!;

        return `${username}#${discriminator}`;
    }
}