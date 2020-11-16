/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deeepvision/http-client';
import { APIError, parseResponse, ID } from '@deeepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Invite,
    QueryParams,
    InviteGetInput,
    InviteUpdateInput,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

/* [UGC classes] */
/* [/UGC] */

export default class InviteController {
    private readonly http: HttpClient;
    private readonly id: ID;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(id: ID, http: HttpClient) {
        this.id = id;
        this.http = http;

        /* [UGC constructor] */
        /* [/UGC] */
    }

    public async get(input: InviteGetInput = {}): Promise<Invite> {
        const {
            /* [UGC get-input] */
            /* [/UGC] */
        } = input;

        const response = await this.http.get(`/invites/${this.id}`, {
            query: {
                /* [UGC get-query] */
                /* [/UGC] */
            },
            headers: {
                /* [UGC get-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    public async update(data: InviteUpdateInput, params: QueryParams = {}): Promise<Invite> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            /* [UGC update-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.put(`/invites/${this.id}`, data, {
            query: {
                /* [UGC update-query] */
                /* [/UGC] */
            },
            headers: {
                /* [UGC update-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    public async delete(): Promise<string> {
        const response = await this.http.delete(`/invites/${this.id}`);

        return parseResponse(response, { successCode: 204 });
    }

    /* [UGC methods] */
    /* [/UGC] */
}
