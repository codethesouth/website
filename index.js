const express = require( 'express' );
const path = require( 'path' );

const app = express( );

const defaultResponse = {
    success: false,
    value: null,
    messages: []
};

// Serve static files from the React app
app.use( express.static( path.join( __dirname, 'client/build' ) ) );

// Put all API endpoints under '/api'
app.post( 'api/contact', function( request, response ) {
    console.log( request.body );
    // Send an e-mail containing the request body (contact form contents)
    const json = defaultResponse;
    json.success = true;
    json.value = 'It works!';

    response.send( json );
} );

app.get('api/test', function( request, response ) {
    const json = defaultResponse;
    json.success = true;
    json.value = 'api/test works!';

    response.send( json );
} );

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.


function validateEmail( email ) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test( email );
}

const port = process.env.PORT || 4000;
app.listen( port );

console.log(`API listening on ${port}`);
