/**
 * Copyright 2015, Digital Optimization Group, LLC.
 * Copyrights licensed under the APACHE 2 License. See the accompanying LICENSE file for terms.
 */
/**
var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];
var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var React = _interopRequireDefault(require('react'))['default'];
var connectToStores = require('fluxible-addons-react').connectToStores;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Alert = require('react-bootstrap').Alert;
**/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fluxibleAddonsReact = require('fluxible-addons-react');

var _reactBootstrap = require('react-bootstrap');

var _actionsAuthenticationActions = require('../actions/authenticationActions');

var _actionsAuthenticationActions2 = _interopRequireDefault(_actionsAuthenticationActions);

var _storesAuthenticationStore = require('../stores/authenticationStore');

var _storesAuthenticationStore2 = _interopRequireDefault(_storesAuthenticationStore);

var AuthenticationComponent = (function (_React$Component) {
    _inherits(AuthenticationComponent, _React$Component);

    function AuthenticationComponent(props, context) {
        _classCallCheck(this, AuthenticationComponent);

        _get(Object.getPrototypeOf(AuthenticationComponent.prototype), 'constructor', this).call(this);
        this.state = {
            show: false,
            mainbuttontext: "Login",
            headertext: "Please sign in...",
            actionbuttontext: "Sign In",
            message: "",
            messageclass: "danger"
        };

        this._refreshStateWithProps = this._refreshStateWithProps.bind(this);
        this._showModal = this._showModal.bind(this);
        this._hideModal = this._hideModal.bind(this);
        this._login = this._login.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    _createClass(AuthenticationComponent, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log("loginElement: Receiving new props ->", nextProps);
            this._refreshStateWithProps(nextProps);
        }
    }, {
        key: '_refreshStateWithProps',
        value: function _refreshStateWithProps(nextProps) {
            if (typeof nextProps !== "undefined" && nextProps.loggedIn) {
                this.setState({

                    mainbuttontext: "Logout",
                    headertext: "User details: " + nextProps.user,
                    actionbuttontext: "Sign Out",
                    message: "You are already signed in as " + nextProps.user + " who is a user in group: " + nextProps.group,
                    messageclass: "info"
                });
            } else {
                this.setState({
                    mainbuttontext: "Login",
                    headertext: "Please sign in...",
                    actionbuttontext: "Sign In",
                    message: "",
                    messageclass: "danger"
                });
                if (typeof nextProps !== "undefined" && nextProps.attempts > 0) {
                    this.setState({
                        message: "Username and password combination invalid!"
                    });
                }
            }
        }
    }, {
        key: '_showModal',
        value: function _showModal() {
            this._refreshStateWithProps(this.props);
            this.setState({
                show: true
            });
        }
    }, {
        key: '_hideModal',
        value: function _hideModal() {
            this.setState({
                show: false
            });
        }
    }, {
        key: '_handleKeyPress',
        value: function _handleKeyPress(event) {
            //console.log("Keypress event ->", event);
            var charCode = event.which || event.charCode || event.keyCode || 0;
            //console.log("charCode ->", charCode);
            if (charCode === 13) {
                this._login(event);
            }
        }
    }, {
        key: '_login',
        value: function _login(event) {
            event.preventDefault();
            if (!this.props.loggedIn) {

                this.setState({
                    message: "Attempting login with Username " + this.refs.userInput.getValue(),
                    messageclass: "info"
                });

                if (this.refs.userInput.getValue() !== "" && this.refs.passInput.getValue() !== "") {
                    //Authentication Service called here.
                    context.executeAction(LoginActions, ["Login", {
                        username: this.refs.userInput.getValue(),
                        password: this.refs.passInput.getValue()
                    }]);
                } else {
                    this.setState({
                        message: "Username or password cannot be empty!",
                        messageclass: "danger"
                    });
                }
            } else {
                context.executeAction(LoginActions, ["Logout", null]);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            //Contains the username and password inputs
            var form = _react2['default'].createElement('div', { className: 'login-form-group' });

            //Main page buttons which serve as the entrypoint of the modal
            // TODO: have style props which change how main buttons look
            var mainbuttons = _react2['default'].createElement(
                'div',
                { className: 'login-mainbuttons' },
                _react2['default'].createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'info', onClick: this._showModal },
                    'User Profile'
                ),
                _react2['default'].createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'primary', onClick: this._login },
                    this.state.mainbuttontext
                )
            );

            //alert which is displayed when password is wrong etc
            //also temporarily used to display user info
            var alert = _react2['default'].createElement('div', { className: 'login-alert' });

            if (this.state.message !== "") {
                alert = _react2['default'].createElement(
                    _reactBootstrap.Alert,
                    { bsSize: 'medium', bsStyle: this.state.messageclass },
                    this.state.message
                );
            }

            //if there is no user logged in show the input form and change the main page buttons
            if (!this.props.loggedIn) {
                form = _react2['default'].createElement(
                    'div',
                    { className: 'login-form-group' },
                    _react2['default'].createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2['default'].createElement(
                            _reactBootstrap.Col,
                            { xs: 6 },
                            _react2['default'].createElement(_reactBootstrap.Input, { type: 'text', ref: 'userInput', placeholder: 'Username', onKeyPress: this._handleKeyPress })
                        ),
                        _react2['default'].createElement(
                            _reactBootstrap.Col,
                            { xs: 6 },
                            _react2['default'].createElement(_reactBootstrap.Input, { type: 'password', ref: 'passInput', placeholder: 'Password', onKeyPress: this._handleKeyPress })
                        )
                    )
                );

                mainbuttons = _react2['default'].createElement(
                    _reactBootstrap.Button,
                    { bsStyle: 'primary', onClick: this._showModal },
                    this.state.mainbuttontext
                );
            }

            return _react2['default'].createElement(
                'div',
                null,
                mainbuttons,
                _react2['default'].createElement(
                    _reactBootstrap.Modal,
                    _extends({}, this.props, {
                        show: this.state.show,
                        onHide: this._hideModal,
                        dialogClassName: 'login-modal'
                    }),
                    _react2['default'].createElement(
                        _reactBootstrap.Modal.Header,
                        { closeButton: true, modalClassName: 'login-modal-header' },
                        _react2['default'].createElement(
                            _reactBootstrap.Modal.Title,
                            { id: 'contained-modal-title-lg', modalClassName: 'login-modal-title' },
                            this.state.headertext
                        )
                    ),
                    _react2['default'].createElement(
                        _reactBootstrap.Modal.Body,
                        null,
                        form,
                        alert
                    ),
                    _react2['default'].createElement(
                        _reactBootstrap.Modal.Footer,
                        null,
                        _react2['default'].createElement(
                            _reactBootstrap.Button,
                            { onClick: this._hideModal },
                            'Close'
                        ),
                        _react2['default'].createElement(
                            _reactBootstrap.Button,
                            { onClick: this._login, bsStyle: 'primary' },
                            this.state.actionbuttontext
                        )
                    )
                )
            );
        }
    }]);

    return AuthenticationComponent;
})(_react2['default'].Component);

AuthenticationComponent.propTypes = {};

AuthenticationComponent = (0, _fluxibleAddonsReact.connectToStores)(AuthenticationComponent, [_storesAuthenticationStore2['default']], function (context, props) {
    return context.getStore(_storesAuthenticationStore2['default']).getState();
});

exports['default'] = AuthenticationComponent;
module.exports = exports['default'];