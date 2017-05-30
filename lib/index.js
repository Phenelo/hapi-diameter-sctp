'use strict';

const Diameter = require('diameter-sctp');
const internals = {};

internals.createClient = function (opts, next) {

    return Diameter.createClient(opts, next);
};


exports.register = (server, options, next) => {

    if (options.debug) {
        Diameter.debug(true);
    }

    server.expose('createClient', internals.createClient);

    return next();
};


exports.register.attributes = {
    pkg: require('../package.json')
};
