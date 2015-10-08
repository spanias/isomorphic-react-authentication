/**
* Copyright 2015, Digital Optimization Group, LLC.
* Copyrights licensed under the APACHE 2 License. See the accompanying LICENSE file for terms.
**/
'use strict';

var jwt = require('jsonwebtoken');

module.exports = {
    name: 'AuthenticationService',

    authenticate: function authenticate(params, callback) {
        var key = 'private';
        if (params.username === "spanias" && params.password === "password") {
            console.log("AuthenticationService: Authentication Successful!");
            var token = jwt.sign({
                user: 'spanias',
                group: 'administrator',
                email: 'demetris@spanias.com',
                verified: false
            }, key);
            callback(null, token);
        } else {
            console.log("AuthenticationService: Authentication Failed!");
            var err = { errorID: 1, message: 'Authentication Failed' };
            callback(err, null);
        }
    },

    setAuthenticateMethod: function setAuthenticateMethod(authenticateMethod) {
        this.authenticate = authenticateMethod;
    },

    read: function read(req, resource, params, config, callback) {
        //params contains username, password
        console.log("AuthenticationService: reading -> ", params, "==", params.username, ":", params.password);
        this.authenticate(params, function (err, token) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, token);
            }
        });
    }
};
/*
 // create: function(req, resource, params, body, config, callback) {},
 // update: function(req, resource, params, body, config, callback) {},
 // delete: function(req, resource, params, config, callback) {}
*/