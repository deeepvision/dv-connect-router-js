
import { HttpClient } from '@deepvision/http-client';
import {
    parseResponse,
} from '@deepvision/api-kit';

import {
    Tunel,
} from './dto';

export default class {
    private readonly http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }
    public async getByInvite(inviteId: string): Promise<Tunel> {
        const response = await this.http.get(`/tunels/byInvite/${inviteId}`);

        return parseResponse(response);
    }
}
