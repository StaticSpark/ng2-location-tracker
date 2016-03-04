// Use strict mode to enable ES6 : class, etc ...
'use strict';

var app,
    port;

global.__appRoot = __dirname + '/';

// Prepare server environment
// ==============================================================================
app = require('./server/app').app();

// START THE SERVER
// =============================================================================

// set our port in the PORT environment variable
port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log('connected on port ' + port);
});
