export interface IUser {
    id: string;
    username: string;
    discriminator: string;
    avatar?: string;
    guilds: IGuild[];

    mutual_guilds?: IGuild[];
}

export interface IGuild {
    id: string;
    name: string;
    icon?: string;
    owner: boolean;
    permissions: number;
    features: string[];

    config: IGuildConfig;
}

export interface IGuildConfig {
    guildID: string;
    prefix: string;
    delete_timeout: number;
    spam_channels: string[];
    roles: IGuildConfigRoles;
    announce: IGuildConfigAnnounceOptions;
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