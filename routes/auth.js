//Here we use the function getTokenFromHeaders to get a JWT token that will be sent from the client side in the request’s headers. 
//We also create an auth object with optional and required properties. 
//We will use these in our routes.

const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {
    const { headers: {authorization}} = req;

    if(authorization && authorization.split(' ') [0] === 'Token') {
        return authorization.split(' ')[1];
    }
    return null;
};

const auth = {
    required: jwt({
        secret: 'secret',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
    }),
    optional: jwt({
        secret: 'secret',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
    }),

};

module.exports = auth;