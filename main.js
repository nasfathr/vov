var express = require('express');
var hbs = require('express-hbs');
var lowdb = require('lowdb');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
 
var site = express();

site.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/lib'
}));
site.set('view engine', 'hbs');
site.set('views', __dirname + '/views');

site.get('/favicon.*',function(req,res){
	res.send('');
});

site.use(session({
	secret: '0o1q9i2w8u3e7y4r6t5',
	resave: false,
	store: new FileStore({}),
	saveUninitialized: true,
	cookie: {}
}));

site.get('/', (req,res) => {
	res.render('index.hbs',{
		welcome_message: 'Hello World!!',
		session: req.session
	});
});

site.post('/register', (req,res) => {
	req.session.loggedIn = 1;
});

site.post('/login', (req,res) => {
	req.session.loggedIn = 1;
});

site.get('/logout', (req,res) => {
	req.session.destroy(()=>{
		res.redirect('/');
	});
});

site.listen(3003);
