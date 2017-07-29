var express = require('express');
var hbs = require('express-hbs');

var site = express();

site.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/lib'
}));
site.set('view engine', 'hbs');
site.set('views', __dirname + '/views');

site.get('/favicon.*',function(req,res){
	res.send('');
});

site.get('/',function(req,res){
	res.render('index.hbs');
});

site.listen(3003);
