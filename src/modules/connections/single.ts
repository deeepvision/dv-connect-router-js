/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deeepvision/http-client';
import { APIError, parseResponse, ID } from '@deeepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Connection,
    QueryParams,
    ConnectionGetInput,
    ConnectionUpdateInput,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

/* [UGC classes] */
/* [/UGC] */

export default class ConnectionController {
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

    public async get(input: ConnectionGetInput = {}): Promise<Connection> {
        const {
            /* [UGC get-input] */
            /* [/UGC] */
        } = input;

        const response = await this.http.get(`/connections/${this.id}`, {
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

    public async update(data: ConnectionUpdateInput, params: QueryParams = {}): Promise<Connection> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            /* [UGC update-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.put(`/connections/${this.id}`, data, {
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
        const response = await this.http.delete(`/connections/${this.id}`);

        return parseResponse(response, { successCode: 204 });
    }

    /* [UGC methods] */
    public async destroyTunnel(tunnelId: string): Promise<string> {
        const response = await this.http.delete(`/connections/${this.id}/tunnels/${tunnelId}`);

        return parseResponse(response, { successCode: 204 });
    }
    /* [/UGC] */
}
