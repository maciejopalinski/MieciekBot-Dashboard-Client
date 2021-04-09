import { BaseDataHandler, CDN, IGuild } from './';

export class GuildData extends BaseDataHandler<IGuild> {

    constructor(guild: IGuild) {
        super('API_Guild');
        
        this.query = {} as any;
        this.query.data = guild;
    }

    hasIcon() {        
        return this.data!.icon!.length > 1;
    }

    getIcon(size = 512): string | undefined {
        if(!this.hasIcon()) return undefined;

        const { id, icon } = this.data!;
        return CDN(`/icons/${id}/${icon}.png?size=${size}`);
    }
}