
import { HttpClient } from '@deeepvision/http-client';
import {
    parseResponse,
} from '@deeepvision/api-kit';

import {
    Tunnel,
} from './dto';

export default class {
    private readonly http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }
    public async getByInvite(inviteId: string): Promise<Tunnel> {
        const response = await this.http.get(`/tunnels/byInvite/${inviteId}`);

        return parseResponse(response);
    }
}
