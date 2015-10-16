/**
 * Created by Turmoil on 07/10/2015.

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
module.exports = exports["default"];