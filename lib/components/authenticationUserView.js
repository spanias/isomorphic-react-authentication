/**
 * Copyright 2015, Digital Optimization Group, LLC.
 * Copyrights licensed under the APACHE 2 License. See the accompanying LICENSE file for terms.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

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

var AuthenticationUserView = (function (_React$Component) {
    _inherits(AuthenticationUserView, _React$Component);

    function AuthenticationUserView(props, context) {
        _classCallCheck(this, AuthenticationUserView);

        _get(Object.getPrototypeOf(AuthenticationUserView.prototype), 'constructor', this).call(this);
        this.state = {
            visible: false,
            imageurl: "",
            user: "",
            firstname: "",
            lastname: "",
            email: "",
            verified: "",
            group: ""
        };
        this._refreshStateWithProps = this._refreshStateWithProps.bind(this);

        this._refreshStateWithProps(props);

        //this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    _createClass(AuthenticationUserView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("authenticationUserView: didMount ->", this.props);
            this._refreshStateWithProps(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log("authenticationUserView: willReceiveProps ->", nextProps);
            this._refreshStateWithProps(nextProps);
        }
    }, {
        key: '_refreshStateWithProps',
        value: function _refreshStateWithProps(nextProps) {
            if (typeof nextProps !== "undefined" && nextProps.loggedIn) {
                this.setState({
                    visible: true,
                    user: nextProps.user,
                    imageurl: nextProps.imageurl,
                    firstname: nextProps.firstname,
                    lastname: nextProps.lastname,
                    email: nextProps.email,
                    verified: nextProps.verified,
                    group: nextProps.group
                });
            } else {
                this.setState({
                    visible: false,
                    user: "",
                    imageurl: "",
                    firstname: "",
                    lastname: "",
                    email: "",
                    verified: "",
                    group: ""
                });
            }
        }

        /*
        _handleKeyPress(event)
        {
            //console.log("Keypress event ->", event);
            var charCode = event.which || event.charCode || event.keyCode || 0;
            //console.log("charCode ->", charCode);
            if (charCode === 13) {
             }
        }
        */

    }, {
        key: 'render',
        value: function render() {

            console.log("authenticationUserView: rendering");
            //Contains the main component (empty if not logged in)
            var userview = _react2['default'].createElement('div', { className: 'authentication-userview-group' });

            var avatarstyle = {
                "border-radius": '50px',
                "width": '125px',
                "height": '140px',
                "padding-bottom": "20px",
                "margin-left": "40px",
                "margin-top": "10px"
            };

            var usernamediv = {
                "padding-bottom": "20px",
                "margin-top": "40px"
            };
            var usernamelabelspan = {
                "font-size": "24px",
                "font-weight": "bold"
            };
            var usernamespan = {
                "font-size": "24px",
                "padding-left": "5px"
            };
            var verifiedlabel = _react2['default'].createElement(
                'span',
                null,
                _react2['default'].createElement(
                    _reactBootstrap.Label,
                    { bsSize: 'xs', bsStyle: 'danger' },
                    'Unverified'
                )
            );
            if (this.state.verified) {
                verifiedlabel = _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        _reactBootstrap.Label,
                        { bsSize: 'xs', bsStyle: 'success' },
                        'Verified'
                    )
                );
            }
            //if there is a user logged in show the user view
            /*
             <Col xs={6}><Image src={this.state.imageurl} circle /></Col>
             */

            if (this.props.loggedIn) {
                userview = _react2['default'].createElement(
                    'div',
                    { className: 'authentication-userview-group' },
                    _react2['default'].createElement(
                        _reactBootstrap.Panel,
                        { header: 'User Information', bsStyle: 'primary' },
                        _react2['default'].createElement(
                            _reactBootstrap.Row,
                            null,
                            _react2['default'].createElement(
                                _reactBootstrap.Col,
                                { xs: 6 },
                                _react2['default'].createElement('img', { src: this.state.imageurl, style: avatarstyle, className: 'authenticationUserView-avatar' })
                            ),
                            _react2['default'].createElement(
                                _reactBootstrap.Col,
                                { xs: 6 },
                                _react2['default'].createElement(
                                    'div',
                                    { style: usernamediv },
                                    _react2['default'].createElement(
                                        'span',
                                        { style: usernamelabelspan },
                                        'Username:'
                                    ),
                                    ' ',
                                    _react2['default'].createElement(
                                        'span',
                                        { style: usernamespan },
                                        this.state.user
                                    ),
                                    ' '
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            _reactBootstrap.Row,
                            null,
                            _react2['default'].createElement(
                                _reactBootstrap.Col,
                                { xs: 6 },
                                _react2['default'].createElement(_reactBootstrap.Input, {
                                    type: 'text',
                                    placeholder: 'Enter text',
                                    label: 'First Name',
                                    value: this.state.firstname })
                            ),
                            _react2['default'].createElement(
                                _reactBootstrap.Col,
                                { xs: 6 },
                                _react2['default'].createElement(_reactBootstrap.Input, {
                                    type: 'text',
                                    placeholder: 'Enter text',
                                    label: 'Last Name',
                                    value: this.state.lastname })
                            )
                        ),
                        _react2['default'].createElement(
                            _reactBootstrap.Row,
                            null,
                            _react2['default'].createElement(
                                _reactBootstrap.Col,
                                { xs: 12 },
                                _react2['default'].createElement(_reactBootstrap.Input, {
                                    type: 'text',
                                    placeholder: 'someone@somewhere.com',
                                    label: 'E-Mail Address',
                                    value: this.state.email,
                                    addonAfter: verifiedlabel })
                            )
                        )
                    )
                );
            }
            return _react2['default'].createElement(
                'div',
                null,
                userview
            );
        }
    }]);

    return AuthenticationUserView;
})(_react2['default'].Component);

AuthenticationUserView.propTypes = {};

AuthenticationUserView = (0, _fluxibleAddonsReact.connectToStores)(AuthenticationUserView, [_storesAuthenticationStore2['default']], function (context, props) {
    return context.getStore(_storesAuthenticationStore2['default']).getState();
});

exports['default'] = AuthenticationUserView;
module.exports = exports['default'];