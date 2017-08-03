var app = require('./express');
var express = app.express;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
// require("./utilities/filelist");

app.use(express.static(__dirname + '/public'));

require("./test/app")(app);
require("./assignment/app.js")(app);

var port = process.env.PORT || 3000;

app.listen(port);