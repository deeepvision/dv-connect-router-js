/* eslint-disable @typescript-eslint/no-empty-interface, max-len */

export class Tunnel {
    id: string;

    input: {
        id: string;
        connectionId: string;
        uid: string;
    };

    output: {
        id: string;
        connectionId: string;
        uid: string;
    };

    duplex: boolean;
    inviteId: string;
}
