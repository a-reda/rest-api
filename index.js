var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

var Controller = require('./controller');


// Config of Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Server port
let serverPort = process.env.PORT || 5000;

// DB URI  Mongodb hosted by mlab, added as a module in Heroku
let DBURI = 'mongodb://localhost:27017/sampleDB';

// DB Stuff on open
mongoose.connection.on("connected", function(ref) {
  console.log("*** Database Ready");
});
// On error
mongoose.connection.on("error", function(err) {
  console.log("*** Could not connect to the database");
  console.log(err);
});

var db = mongoose.connect(DBURI);

app.use('/data', Controller);

app.set("port", serverPort);

app.listen(serverPort, function() {
  console.log(`*** Your app is ready at port ${serverPort}`);
});
