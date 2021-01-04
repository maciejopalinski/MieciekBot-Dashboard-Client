import axios from 'axios';
import { GuildInfo, User } from './types';

export const API = (endpoint: string) => process.env.REACT_APP_API_URL + endpoint;
export const CDN = (endpoint: string) => 'https://cdn.discordapp.com' + endpoint;

export const getUserDetails = async () : Promise<User> => {
    return (await axios.get(API('/discord/@me'), { withCredentials: true })).data;
}

export const getMutualGuilds = async () : Promise<GuildInfo[]> => {
    return (await axios.get(API('/discord/guilds/mutual'), { withCredentials: true })).data;
}

export const getUserAvatar = (id: string, avatar?: string, size = 256) => {
    if(!avatar) return 'https://discordapp.com/assets/dd4dbc0016779df1378e7812eabaa04d.png';

    return CDN(`/avatars/${id}/${avatar}.jpg?size=${size}`);
}

export const getGuildIcon = (id: string, icon: string, size = 256) => {
    return CDN(`/icons/${id}/${icon}.jpg?size=${size}`);
}