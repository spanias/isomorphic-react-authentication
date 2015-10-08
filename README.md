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

Use the store in app.js

    var AuthenticationStore = require('isomorphic-react-authentication').AuthenticationStore;

And add it to the app's stores

        stores: [ AuthenticationStore ] 
    

In the page where the component will be rendered add the following:

	var AuthenticationComponent = require('isomorphic-react-authentication').AuthenticationComponent;

and within the render jsx 

	<AuthenticationComponent />

