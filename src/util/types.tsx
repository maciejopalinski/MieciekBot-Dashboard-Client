export interface GuildInfo {
    owner: boolean;
    permissions: number;
    icon: string;
    id: string;
    name: string;
}

export interface User {
    id: string;
    tag: string;
    avatar?: string;
    guilds: GuildInfo[];
}