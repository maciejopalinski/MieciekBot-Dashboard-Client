import axios from 'axios';

import { BaseDataHandler, API, CDN, GuildData, IUser } from './';

export class UserData extends BaseDataHandler<IUser> {
    
    mutual_guilds: GuildData[] = [];

    async handler() {
        const general = await axios.get(
            API('/discord/@me'), { withCredentials: true }
        );

        const mutual_guilds = await axios.get(
            API('/discord/guilds/mutual'), { withCredentials: true }
        );
        
        const user: IUser = general.data;
        user.mutual_guilds = mutual_guilds.data;

        return user;
    }

    constructor() {
        super('API_User', {
            retry: (failureCount, error) => {
                if(error.response?.status !== 429) return false;
                return true;
            },
            onError: (err) => {
                if(err.response?.status === 401 && window.location.pathname !== '/') {
                    window.location.href = '/';
                }
            }
        });
        
        this.fetch(this.handler);
    }

    getAvatar(size = 512): string | undefined {
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