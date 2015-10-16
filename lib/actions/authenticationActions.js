/**
 * Copyright 2015, Digital Optimization Group, LLC.
 * Copyrights licensed under the APACHE 2 License. See the accompanying LICENSE file for terms.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactLibKeyMirror = require("react/lib/keyMirror");

var _reactLibKeyMirror2 = _interopRequireDefault(_reactLibKeyMirror);

var _constant = require("./constant");

var _constant2 = _interopRequireDefault(_constant);

var _storesAuthenticationStore = require('../stores/authenticationStore');

var _storesAuthenticationStore2 = _interopRequireDefault(_storesAuthenticationStore);

var debugauth = require('debug')('AuthenticationAction');
/*
 This function is used to save and load the login state store.
 could get the whole store here like this if you wanted to save it to the server:
 var store = context.getStore(exampleStore).getState()
 */

exports["default"] = function (context, payload, done) {
    debugauth("The payload in the Action login action  ->", payload);
    var loginTimemout = 10000;
    switch (payload[0]) {
        case "Login":
            debugauth("Reading AuthenticationService ->", payload[1]);
            context.service.read('AuthenticationService', payload[1], { timeout: loginTimemout }, function (err, data) {
                if (err || !data) {
                    debugauth("Calling LOGINFAILED_ACTION, Err: ", err, " data:", data);
                    context.dispatch(_constant2["default"].LOGINFAILED_ACTION, err);
                } else {
                    //https://www.npmjs.com/package/react-cookie
                    context.dispatch(_constant2["default"].LOGINSUCCESS_ACTION, data);
                }
                done();
            });

            break;

        case "LoginWithToken":
            var parameters = { accesstoken: true };
            debugauth("Reading AuthenticationService ->", parameters);
            context.service.read('AuthenticationService', parameters, { timeout: loginTimemout }, function (err, data) {
                if (err || !data) {
                    debugauth("Calling LOGINFAILED_ACTION, Err: ", err, " data:", data);
                    context.dispatch(_constant2["default"].LOGINFAILED_ACTION, err);
                } else {
                    context.dispatch(_constant2["default"].LOGINSUCCESS_ACTION, data);
                }
                done();
            });
            break;

        case "Logout":
            var store = context.getStore(_storesAuthenticationStore2["default"]).getState();
            if (store.loggedIn) {

                var parameters = { logout: true };
                context.service.read('AuthenticationService', parameters, { timeout: loginTimemout }, function (err, data) {
                    if (err) {
                        debugauth("Logout failed! ", err);
                    } else {
                        debugauth("Logout succeded!");
                    }
                });
                context.dispatch(_constant2["default"].LOGOUT_ACTION, null);
                done();
            }
            break;
    }
};

;
module.exports = exports["default"];