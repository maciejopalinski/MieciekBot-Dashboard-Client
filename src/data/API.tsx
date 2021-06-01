import axios from 'axios';
import { IGuild, IGuildConfig, IUser } from './Types';

export const API = (endpoint: string) => process.env.REACT_APP_API_URL + endpoint;
export const CDN = (endpoint: string) => 'https://cdn.discordapp.com' + endpoint;

export const fetchUser = async () => {

    const data = await axios.get<IUser>(
        API('/discord/@me'),
        { withCredentials: true}
    );
    return data;
}

export const fetchMutualGuilds = async () => {

    const data = await axios.get<IGuild[]>(
        API('/discord/guilds/mutual'),
        { withCredentials: true }
    );
    return data;
}

export const fetchGuildConfig = async (id: string) => {

    const data = await axios.get<IGuildConfig>(
        API(`/discord/guilds/${id}/config`),
        { withCredentials: true }
    );
    return data;
}

export const submitGuildConfig = async (id: string, data: IGuildConfig) => {

    // TODO: add POST request to send updated guild config
    console.log(data);
}