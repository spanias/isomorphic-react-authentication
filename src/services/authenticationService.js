/**
* Copyright 2015, Digital Optimization Group, LLC.
* Copyrights licensed under the APACHE 2 License. See the accompanying LICENSE file for terms.
**/
var jwt = require('jsonwebtoken');

module.exports = {
    name: 'AuthenticationService',

    /*
     "read" is used for GET requests, other methods are also available. see:
     https://github.com/yahoo/fluxible-plugin-fetchr/blob/master/docs/fluxible-plugin-fetchr.md
     Also note that the "req" argument contains the full request object from nodejs.
     */

    read: function (req, resource, params, config, callback) {
        //params contains username, password
        var key = 'private';

        //callback (err, jwt)
        //call to whatever is going to verify username and password
        console.log("AuthenticationService: reading -> ", params, "==", params.username, ":", params.password);

        if (params.username === "spanias" && params.password === "password") {
            console.log("AuthenticationService: Authentication Successful!");
            var token = jwt.sign({
                user: 'spanias',
                group: 'administrator',
                email: 'demetris@spanias.com',
                verified: false
            }, key);
            callback(null, token);
        }
        else {
            console.log("AuthenticationService: Authentication Failed!");
            var err = {errorID: 1, message: 'Authentication Failed'};
            callback(err, null)
        }
    }
};
    /*
     // create: function(req, resource, params, body, config, callback) {},
     // update: function(req, resource, params, body, config, callback) {},
     // delete: function(req, resource, params, config, callback) {}
    */

