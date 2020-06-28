/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseConnection {
    id: string;
    name?: string;
    dateCreated?: string;
    type: string;
    credentials: object;
}

export interface BaseConnectionInput {
    name?: string;
    type: string;
    credentials: object;
}

export interface BaseConnectionUpdateInput {
    name?: string;
    type?: string;
    credentials?: object;
}

export interface Connection extends BaseConnection {
    /* [UGC class] */
    /* [/UGC] */
}

export interface ConnectionInput extends BaseConnectionInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface ConnectionUpdateInput extends BaseConnectionUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
}

export interface ConnectionGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface ConnectionListQuery {
    limit?: number;
    offset?: number;
    sort?: string;
    text?: string;
    ids?: string;
    exclude?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface ConnectionListInput extends ConnectionListQuery {
}

export interface ConnectionList {
    messages: Array<Connection>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
/* [/UGC] */
