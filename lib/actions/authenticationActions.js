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

/*
 This function is used to save and load the login state store.
 could get the whole store here like this if you wanted to save it to the server:
 var store = context.getStore(exampleStore).getState()
 */

exports["default"] = function (context, payload, done) {
    console.log("The payload in the Action login action  ->", payload);

    switch (payload[0]) {
        case "Login":
            console.log("Reading AuthenticationService ->", payload[1]);
            context.service.read('AuthenticationService', payload[1], {}, function (err, token) {
                if (err || !token) {
                    context.dispatch(_constant2["default"].LOGINFAILED_ACTION, err);
                } else {
                    context.dispatch(_constant2["default"].LOGINSUCCESS_ACTION, token);
                }
                done();
            });

            break;

        case "Logout":
            var store = context.getStore(_storesAuthenticationStore2["default"]).getState();
            if (store.loggedIn) {
                context.dispatch(_constant2["default"].LOGOUT_ACTION, null);
            }
            break;
    }
};

;
module.exports = exports["default"];