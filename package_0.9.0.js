Package.describe ({
    summary: "Client Side templates styled for Twitter Bootstrap to be used with the Meteor package accounts-meld.",
    version: "1.0.4",
    name: "splendido:accounts-meld-client-bootstrap",
    git: "https://github.com/splendido/meteor-accounts-meld-client-templates-bootstrap.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
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