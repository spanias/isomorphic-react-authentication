/**
 * Copyright 2015, Digital Optimization Group, LLC.
 * Copyrights licensed under the APACHE 2 License. See the accompanying LICENSE file for terms.
 */

import React from 'react';
import {connectToStores} from 'fluxible-addons-react';
import {ButtonToolbar, Button, Input, Row, Col, Alert, Panel} from 'react-bootstrap';
import AuthenticationActions  from '../actions/authenticationActions';
import AuthenticationStore from '../stores/authenticationStore';

class AuthenticationUserView extends React.Component {

    constructor(props, context) {
        super();
        this.state = {
            visible: false,
            user: "",
            FirstName: "",
            LastName: "",
            email:"",
            verified: "",
            group: ""
        };

        this._refreshStateWithProps = this._refreshStateWithProps.bind(this);
        this._login = this._login.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("authenticationUserView: Receiving new props ->", nextProps);
        this._refreshStateWithProps(nextProps);
    }

    _refreshStateWithProps(nextProps) {
        if (typeof nextProps !== "undefined" && nextProps.loggedIn) {
            this.setState({
                visible: true,
                user: nextProps.user,
                FirstName: "",
                LastName: "",
                email: nextProps.email,
                verified: nextProps.verified,
                group: nextProps.group
            });
        }
        else {
            this.setState({
                visible: false,
                user: "",
                FirstName: "",
                LastName: "",
                email:"",
                verified: "",
                group: ""
            });
        }
    }

    _handleKeyPress(event)
    {
        //console.log("Keypress event ->", event);
        var charCode = event.which || event.charCode || event.keyCode || 0;
        //console.log("charCode ->", charCode);
        if (charCode === 13) {
            this._login(event);
        }
    }

    render() {
        //Contains the main component (empty if not logged in)
        var userview =
            <div className="authentication-userview-group">
            </div>;


        //if there is a user logged in show the user view
        if (this.props.loggedIn){
            userview =
                <div className="authentication-userview-group">
                    <Panel header="User Information">
                        <Input value={this.state.FirstName} />
                        <Input value={this.state.LastName} />
                    </Panel>
                </div>;
        }


        return (
            {component}
        );
    }
}

AuthenticationUserView.propTypes = {
};

AuthenticationUserView = connectToStores(AuthenticationUserView, [AuthenticationStore], function (context, props) {
    return context.getStore(AuthenticationStore).getState()
});

export default AuthenticationUserView;
