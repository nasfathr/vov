var express = require('express');
var site = express();

// site.engine('.html', require('ejs-locals'));
// site.set('view engine','html');
// site.set('views',__dirname + '/app/templates');

site.get('/favicon.*',function(req,res){
	res.send('');
});

site.get('/',function(req,res){
	res.send("Hello!");
});

site.listen(3003);
