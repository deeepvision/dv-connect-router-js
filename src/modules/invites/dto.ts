/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export interface BaseInvite {
    id: string;
    dateCreated?: string;
    to: string;
    meta?: object;
}

export interface BaseInviteInput {
    to: string;
    meta?: object;
}

export interface BaseInviteUpdateInput {
    to?: string;
    meta?: object;
}

export interface Invite extends BaseInvite {
    /* [UGC class] */
    /* [/UGC] */
}

export interface InviteInput extends BaseInviteInput {
    /* [UGC input] */
    /* [/UGC] */
}

export interface InviteUpdateInput extends BaseInviteUpdateInput {
    /* [UGC update-input] */
    /* [/UGC] */
}

export interface QueryParams {
}

export interface InviteGetInput extends QueryParams {
    /* [UGC get] */
    /* [/UGC] */
}

export interface InviteListQuery {
    limit?: number;
    offset?: number;
    sort?: string;
    text?: string;
    ids?: string;
    exclude?: string;
    /* [UGC list-query] */
    /* [/UGC] */
}

export interface InviteListInput extends InviteListQuery {
}

export interface InviteList {
    messages: Array<Invite>;
    meta: {
        limit: number;
        offset: number;
        text?: string;
        total: number;
    };
}

/* [UGC interfaces] */
/* [/UGC] */
