module.exports = {
    type: 'api-lib',
    name: '@deeepvision/router.js',
    shortname: 'router',
    description: 'Router JS',
    author: {
        name: 'Sergii Sadovyi',
        email: 's.sadovyi@deepvision.team',
    },
    contributors: [
        {
            name: 'Vitaliy Angolenko',
            email: 'v.angolenko@deepvision.team',
        },
        {
            name: 'Denys Shnurenko',
            email: 'd.shnurenko@deepvision.team',
        }
    ],
    repository: {
        name: 'Router JS',
        host: 'github.com',
        path: 'deeepvision/dv-connect-router-js',
    },
    publishConfig: {
        registry: 'https://npm.pkg.github.com/'
    },
    license: 'file LICENSE.md',
    headers: [
        {
            name: 'author',
            value: '💧DeepVision <support@deepvision.team>',
        },
    ],
    loopback: {
        oas2: '../router-nest/oas2.json',
    },
    lib: {
        webhooks: true,
    }
};
