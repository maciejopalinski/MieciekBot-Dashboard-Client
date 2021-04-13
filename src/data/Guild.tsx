import { BaseDataHandler, CDN, IGuild } from '.';

export class GuildData extends BaseDataHandler<IGuild> {

    constructor(guild: IGuild) {
        super('API_Guild');
        
        this.query = {
            isSuccess: true,
            isLoading: false,
            isError: false,
            data: guild,
            error: undefined,
        } as any;
    }

    hasIcon() {
        return this.data!.icon && this.data!.icon.length > 1;
    }

    getIcon(size = 512) {
        if(!this.hasIcon()) return undefined;

        const { id, icon } = this.data!;
        return CDN(`/icons/${id}/${icon}.png?size=${size}`);
    }
}