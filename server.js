// Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//mongoose connect and set schemas
require('./config/mongoose.js').mongooseSetSchemas();

// App Settings
app.use(bodyParser.json());

// Routes
require('./config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})