/**
 * Copyright 2015, Digital Optimization Group, LLC.
 * Copyrights licensed under the APACHE 2 License. See the accompanying LICENSE file for terms.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _AuthenticationStore$handlers;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _fluxibleAddons = require('fluxible/addons');

var _actionsConstant = require("../actions/constant");

var _actionsConstant2 = _interopRequireDefault(_actionsConstant);

var debug = require('debug');
var debugauth = debug('AuthenticationStore');

var AuthenticationStore = (function (_BaseStore) {
    _inherits(AuthenticationStore, _BaseStore);

    function AuthenticationStore(dispatcher) {
        _classCallCheck(this, AuthenticationStore);

        _get(Object.getPrototypeOf(AuthenticationStore.prototype), 'constructor', this).call(this, dispatcher);
        this.propStore = {
            loggedIn: false,
            attempts: 0,
            user: null,
            jwt: null,
            email: null,
            group: null,
            firstname: null,
            lastname: null,
            imageurl: null,
            verified: false,
            errormessage: null
        };
    }

    _createClass(AuthenticationStore, [{
        key: 'loginAction',
        value: function loginAction(payload) {
            var decoded = payload;

            this.propStore = {
                loggedIn: true,
                attempts: 0,
                user: decoded.user,
                jwt: decoded.token,
                group: decoded.group,
                email: decoded.email,
                firstname: decoded.firstname,
                lastname: decoded.lastname,
                imageurl: decoded.imageurl,
                verified: decoded.verified,
                errormessage: null
            };
            this.emitChange();
        }
    }, {
        key: 'loginFailedAction',
        value: function loginFailedAction(payload) {
            var attemptincrement = 1;
            var errormessage = "";

            if (payload != undefined) {
                if (payload.message === "XMLHttpRequest timeout") {
                    debugauth("loginFailedAction -  Timeout detected!");
                    attemptincrement = 0;
                    errormessage = "Login request timed out!";
                }
            }
            this.propStore = {
                loggedIn: false,
                attempts: this.propStore.attempts + attemptincrement,
                user: null,
                jwt: null,
                email: null,
                group: null,
                firstname: null,
                lastname: null,
                imageurl: null,
                verified: false,
                errormessage: errormessage
            };

            this.emitChange();
        }
    }, {
        key: 'logoutAction',
        value: function logoutAction(payload) {
            this.propStore = {
                loggedIn: false,
                attempts: 0,
                user: null,
                jwt: null,
                email: null,
                group: null,
                firstname: null,
                lastname: null,
                imageurl: null,
                verified: false,
                errormessage: null
            };
            this.emitChange();
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this.propStore;
        }
    }, {
        key: 'dehydrate',
        value: function dehydrate() {
            return { propStore: this.propStore };
        }
    }, {
        key: 'rehydrate',
        value: function rehydrate(state) {
            this.propStore = state.propStore;
        }
    }]);

    return AuthenticationStore;
})(_fluxibleAddons.BaseStore);

AuthenticationStore.storeName = 'authenticationStore';
AuthenticationStore.handlers = (_AuthenticationStore$handlers = {}, _defineProperty(_AuthenticationStore$handlers, _actionsConstant2['default'].LOGINSUCCESS_ACTION, 'loginAction'), _defineProperty(_AuthenticationStore$handlers, _actionsConstant2['default'].LOGINFAILED_ACTION, 'loginFailedAction'), _defineProperty(_AuthenticationStore$handlers, _actionsConstant2['default'].LOGOUT_ACTION, 'logoutAction'), _AuthenticationStore$handlers);

exports['default'] = AuthenticationStore;
module.exports = exports['default'];