/**
 * Copyright 2015, Digital Optimization Group, LLC.
 * Copyrights licensed under the APACHE 2 License. See the accompanying LICENSE file for terms.
 */

import React from 'react';
import {connectToStores} from 'fluxible-addons-react';
import {ButtonToolbar, Button, Input, Row, Col, Alert, Panel} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import AuthenticationActions  from '../actions/authenticationActions';
import AuthenticationStore from '../stores/authenticationStore';

class AuthenticationUserView extends React.Component {

    constructor(props, context) {
        super();
        this.state = {
            visible: false,
            imageurl:"",
            user: "",
            firstname: "",
            lastname: "",
            email:"",
            verified: "",
            group: ""
        };
        this._refreshStateWithProps = this._refreshStateWithProps.bind(this);

        this._refreshStateWithProps(props);

        //this._handleKeyPress = this._handleKeyPress.bind(this);
    }
    componentDidMount()
    {
        console.log("authenticationUserView: didMount ->", this.props);
        this._refreshStateWithProps(this.props);
    }
    componentWillReceiveProps(nextProps) {
        console.log("authenticationUserView: willReceiveProps ->", nextProps);
        this._refreshStateWithProps(nextProps);
    }

    _refreshStateWithProps(nextProps) {
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
        }
        else {
            this.setState({
                visible: false,
                user: "",
                imageurl:"",
                firstname: "",
                lastname: "",
                email:"",
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


    render() {

        console.log("authenticationUserView: rendering");
        //Contains the main component (empty if not logged in)
        var userview =
            <div className="authentication-userview-group">
            </div>;

        var avatarstyle = {
            "border-radius": '50px',
            "width": '125px',
            "height": '140px',
            "padding-bottom": "20px"
        };
        //if there is a user logged in show the user view
        /*
         <Col xs={6}><Image src={this.state.imageurl} circle /></Col>

        */

        if (this.props.loggedIn){
            userview =
                <div className="authentication-userview-group">
                    <Panel header="User Information" bsStyle="primary">
                        <Row>
                            <Col xs={6}><img src={this.state.imageurl} style={avatarstyle} className="authenticationUserView-avatar"/></Col>
                            <Col xs={6}><h3>Username:</h3> <h4>{this.state.user}</h4></Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Input
                                    type="text"
                                    placeholder="Enter text"
                                    label="First Name"
                                    value={this.state.firstname} />
                            </Col>
                            <Col xs={6}>
                                <Input
                                    type="text"
                                    placeholder="Enter text"
                                    label="Last Name"
                                    value={this.state.lastname} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Input
                                    type="text"
                                    placeholder="someone@somewhere.com"
                                    label="E-Mail Address"
                                    value={this.state.email} />
                            </Col>
                        </Row>
                    </Panel>
                </div>;
        }
        return (
            <div>
                {userview}
            </div>
        );
    }
}

AuthenticationUserView.propTypes = {
};

AuthenticationUserView = connectToStores(AuthenticationUserView, [AuthenticationStore], function (context, props) {
    return context.getStore(AuthenticationStore).getState()
});

export default AuthenticationUserView;
