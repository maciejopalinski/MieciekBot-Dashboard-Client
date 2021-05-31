export interface IUser {
    id: string;
    username: string;
    discriminator: string;
    avatar?: string;
    guilds: IGuild[];
}

export interface IGuild {
    id: string;
    name: string;
    icon?: string;
    owner: boolean;
    permissions: number;
    features: string[];
}

export interface IGuildConfig {
    guildID: string;
    prefix: string;
    delete_timeout: number;
    roles: IGuildConfigRoles;
    announce: IGuildConfigAnnounceOptions;
    spam_channels: string[];
}

export interface IGuildConfigRoles {
    owner: string;
    admin: string;
    dj: string;
    user: string;
    mute: string;
}

export interface IGuildConfigAnnounceOptions {
    channel_id: string;
    toggles: IGuildConfigAnnounceToggles;
}

export interface IGuildConfigAnnounceToggles {
    add_member: boolean;
    remove_member: boolean;
}