import { IUser, IGuild, CDN } from '../data';

export const getUserTag = (user: IUser) => {
    return `${user.username}#${user.discriminator}`;
}

export const getUserAvatar = (user: IUser, size = 256) => {

    const { avatar, discriminator, id } = user;

    if(!avatar) return CDN(`/embed/avatars/${+discriminator % 5}.png?size=${size}`);
    else return CDN(`/avatars/${id}/${avatar}.jpg?size=${size}`);
}

export const getGuildIcon = (guild: IGuild, size = 256) => {
    return CDN(`/icons/${guild.id}/${guild.icon}.png?size=${size}`);
}