#Description
This module is designed as an addon component to isomorphic-react-base-app.
It provides access to a local authentication scheme.

#Usage
    
    npm install ../isomorphic-react-authentication/

Add the following in the appications' constant actions.

    //Authentication Store Uses These
    LOGINSUCCESS_ACTION: null,
    LOGINFAILED_ACTION: null,
    LOGOUT_ACTION: null

Register the Authentication Service in server.js

	fetchrPlugin.registerService(require('isomorphic-react-authentication').AuthenticationService);	

Use the store in app.js

    var AuthenticationStore = require('isomorphic-react-authentication').AuthenticationStore;

        stores: [ AuthenticationStore ] 
    

In the page where the component will be rendered add the following:

	var AuthenticationComponent = require('isomorphic-react-authentication').AuthenticationComponent;

and within the render jsx 

	<AuthenticationComponent />

