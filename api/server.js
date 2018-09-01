const express = require( "express" );
const app = express( );


app.get( "/", function( request, resposne ) {
    response.send("Welcome home!");
} );

app.post( "/contact", function( request, response ) {
    console.log( request.body );
    // Send an e-mail containing the request body (contact form contents)
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const port = process.env.PORT || 4000;
app.listen( port );