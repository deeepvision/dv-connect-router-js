import { APIError } from '@deeepvision/api-kit';
import '@deeepvision/test-kit-jest';
import * as nock from 'nock';
import Router from '@/index';
import Invites from '@/modules/invites';
import Connections from '@/modules/connections';
import Tunnels from '@/modules/tunnels';
/* [UGC import] */
/* [/UGC] */

describe('Router', () => {
    test('must throw on missed "endpoint" argument', async () => {
        // @ts-ignore
        await expect(() => new Router({})).toThrowWithCode(APIError, APIError.ENDPOINT);
    });

    test('must initialize successfully', () => {
        const router = new Router({ endpoint: 'https://router.test' });

        /* [UGC modules] */
        /* [/UGC] */
        expect(router.invites).toBeInstanceOf(Invites);
        expect(router.connections).toBeInstanceOf(Connections);
        expect(router.tunnels).toBeInstanceOf(Tunnels);
    });
});