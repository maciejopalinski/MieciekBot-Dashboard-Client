import axios from 'axios';
import { IGuild, IGuildConfig, IUser } from './Types';

export const API = (endpoint: string) => process.env.REACT_APP_API_URL + endpoint;
export const CDN = (endpoint: string) => 'https://cdn.discordapp.com' + endpoint;

export const fetchUser = async () => {

    return await axios.get<IUser>(
        API('/discord/@me'),
        { withCredentials: true}
    );
}

export const fetchMutualGuilds = async () => {

    return await axios.get<IGuild[]>(
        API('/discord/guilds/mutual'),
        { withCredentials: true }
    );
}

export const fetchGuildConfig = async (id: string) => {

    return await axios.get<IGuildConfig>(
        API(`/discord/guilds/${id}/config`),
        { withCredentials: true }
    );
}

export const submitGuildConfig = async (id: string, data: IGuildConfig) => {

    return await axios.post(
        API(`/discord/guilds/${id}/config`),
        data,
        { withCredentials: true }
    );
}