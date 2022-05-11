const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express ();
module.exports = app;

// Parsers for POST data
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Get our API routes
require('./routes')(app);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(3000, () => console.log(`API running on localhost`));
