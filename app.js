var express = require('express')
  , load = require('express-load')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , app = express()
;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('dicesjs'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, function(){

  console.log('Server is online');

});
