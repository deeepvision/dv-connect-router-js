import HttpClient from '@deepvision/http-client';
import { APIError, Webhooks } from '@deepvision/api-kit';
import * as Modules from './modules';
/* [UGC import] */
/* [/UGC] */

export interface Config {
    endpoint: string;
    getAccessToken?: () => Promise<string>;
}

class API {
    http: HttpClient;
    config: Config;

    /* [UGC actions] */
    /* [/UGC] */

    webhooks: Webhooks;
    invites: Modules.Invites;
    connections: Modules.Connections;

    /* [UGC modules] */
    /* [/UGC] */

    constructor(config: Config) {
        if (!config.endpoint) {
            throw new APIError(APIError.ENDPOINT, '"endpoint" is required argument');
        }

        this.http = new HttpClient(config);

        /* [UGC create-actions] */
        /* [/UGC] */

        /* [UGC create-modules] */
        /* [/UGC] */

        this.config = config;
        this.webhooks = new Webhooks(this.http);
        this.invites = new Modules.Invites(this.http);
        this.connections = new Modules.Connections(this.http);
    }
}

export default API;
