const express = require('express');
const app = express();

const bodyparser = require('body-parser');

global.__basedir = __dirname;

app.use( bodyparser.urlencoded( { extended: false } ) );
app.use( bodyparser.json() );
app.use( express.json() );

app.use( express.static( __dirname + '/public' ) );
app.use( '/public', express.static( __dirname + 'public' ) );
app.use( '/css', express.static( __dirname + 'public/css' ) );
app.use( '/js', express.static( __dirname + 'public/js' ) );
app.use( '/img', express.static( __dirname + 'public/img' ) );



app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} )



module.exports = app;