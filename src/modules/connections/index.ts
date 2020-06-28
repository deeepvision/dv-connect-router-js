/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, max-len */
import { HttpClient } from '@deepvision/http-client';
import {
    APIError,
    parseResponse,
    ID,
} from '@deepvision/api-kit';
/* [UGC import] */
/* [/UGC] */

import {
    Connection,
    QueryParams,
    ConnectionInput,
    ConnectionListQuery,
    ConnectionListInput,
    ConnectionList,
    /* [UGC dto-import] */
    /* [/UGC] */
} from './dto';

import ConnectionController from './single';

export default class {
    private readonly http: HttpClient;
    /* [UGC declaration] */
    /* [/UGC] */

    constructor(http: HttpClient) {
        this.http = http;
        /* [UGC constructor] */
        /* [/UGC] */
    }

    public withId(id: ID): ConnectionController {
        if (typeof id !== 'string' && typeof id !== 'number') {
            throw new APIError(APIError.ID, '"id" is required');
        }

        return new ConnectionController(id, this.http);
    }

    async list(input: ConnectionListInput = {}): Promise<ConnectionList> {
        const {
            limit = 10,
            offset = 0,
            sort,
            text,
            ids,
            exclude,
            /* [UGC list-input] */
            /* [/UGC] */
        } = input;

        const query: ConnectionListQuery = {
            sort,
            text,
            /* [UGC list-query] */
            /* [/UGC] */
        };

        if (Array.isArray(ids)) {
            query.ids = ids.join(',');
        } else {
            query.limit = limit;
            query.offset = offset;
        }

        if (Array.isArray(exclude)) {
            query.exclude = exclude.join(',');
        }

        const response = await this.http.get('/connections', {
            query,
            headers: {
                /* [UGC list-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response);
    }

    async create(data: ConnectionInput, params: QueryParams = {}): Promise<Connection> {
        if (!data) {
            throw new APIError(APIError.DATA, '"data" object is required');
        }

        const {
            /* [UGC create-params] */
            /* [/UGC] */
        } = params;

        const response = await this.http.post('/connections', data, {
            query: {
                /* [UGC create-query] */
                /* [/UGC] */
            },
            headers: {
                /* [UGC create-headers] */
                /* [/UGC] */
            },
        });

        return parseResponse(response, { successCode: 201 });
    }

    /* [UGC methods] */
    /* [/UGC] */
}
