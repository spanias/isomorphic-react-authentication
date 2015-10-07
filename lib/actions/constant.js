/**
 * Created by Turmoil on 07/10/2015.
 * var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];
 * var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactLibKeyMirror = require("react/lib/keyMirror");

var _reactLibKeyMirror2 = _interopRequireDefault(_reactLibKeyMirror);

var Actions = (0, _reactLibKeyMirror2["default"])({
    //Authentication Store Uses These
    LOGINSUCCESS_ACTION: null,
    LOGINFAILED_ACTION: null,
    LOGOUT_ACTION: null
});

exports["default"] = Actions;

/*
exports.__esModule = true;
exports['default'] = Actions;
module.exports = exports['default'];
    */
module.exports = exports["default"];