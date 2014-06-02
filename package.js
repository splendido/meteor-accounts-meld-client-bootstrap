Package.on_use(function (api) {
    api.use([
        'minimongo',
        'mongo-livedata',
        'templating'
    ], 'client');

    api.add_files([
        'lib/accounts-meld-client-templates.html',
        'lib/accounts-meld-client-templates.js',
    ], ['client']);

    api.export([
        'MeldActions',
    ], ['client']);
});