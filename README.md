#Description
This module is designed as an addon component to isomorphic-react-base-app.
It provides access to a local authentication scheme.

#Developing

Edit src folder only which is in ES6 and before deployment run 
    
    npm run-script build
    
to transcribe from ES6 to ES5 using babel. The transcribed code is placed in lib folder which is what is retrieved by npm install.

#Usage
    
    npm install ../isomorphic-react-authentication/

Register the Authentication Service in server.js

	fetchrPlugin.registerService(require('isomorphic-react-authentication').AuthenticationService);	
	
For a custom data connections the following is needed in server.js

    var AuthenticationService = require('isomorphic-react-authentication').AuthenticationService;
    var AWSDynamoDBConnector = require ('./app/modules/authenticationModuleServer/index').AWSDynamoDBConnector;
    
    var readonly_dynamocredentials = require('./dynamodbuserreadonly.json');
    var full_dynamocredentials = require('./dynamodbuser.json');
    var readonly_connector = new AWSDynamoDBConnector(readonly_dynamocredentials, true);
    var full_connector = new AWSDynamoDBConnector(full_dynamocredentials, false);
    AuthenticationService.setDataConnectors(full_connector, readonly_connector);
    fetchrPlugin.registerService(AuthenticationService);

This connects an AWSDynamoDBConnector to the Authentication Service.

Credentials are provided in the files dynamodbuserreadonly.json and dynamodbuser.json

	dynamodbuserreadonly.json contains { "accessKeyId": "readonlyaccessid", "secretAccessKey": "key", "region": "eu-west-1" }
	dynamodbuser.json contains { "accessKeyId": "fullaccessid", "secretAccessKey": "otherkey", "region": "eu-west-1" }

We need two credentials one with full access and the other one with readonly access. This is done for security reasons.

Use the store in app.js

    var AuthenticationStore = require('isomorphic-react-authentication').AuthenticationStore;

And add it to the app's stores

        stores: [ AuthenticationStore ] 
    

In the page where the component will be rendered add the following:

	var AuthenticationComponent = require('isomorphic-react-authentication').AuthenticationComponent;

and within the render jsx 

	<AuthenticationComponent />

#Customization

Add the following in your custom .less file

    // Authentication Component properties
    .loginError {
      font-size: 12px;
      font-style: oblique;
      color: red;
    }
    .loginNormal {
      font-size: 12px;
      font-style: oblique;
      color: darkgray;
    }
    .login-modal-title {
      font-size: 22px;
      text-align: center;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .login-modal-header {
      padding-right: 15px;
    }