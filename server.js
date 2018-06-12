var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index');
var login = require('./routes/login');

var app = express();

const port = process.env.PORT || 4041;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/', index);
app.use('/api', login);

app.listen(port, function(){
   console.log("server running");
});