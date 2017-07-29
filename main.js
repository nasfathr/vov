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

site.get('/watch', (req,res) => {
	if (req.session.loggedIn) {
		res.render('watch.hbs',{
			welcome_message: 'Hello World!!',
			session: req.session
		});
	}
	else {
		res.status(401).send('Unauthorized');
	}
});

site.get('/research', (req,res) => {
	if (req.session.loggedIn) {
		res.render('research.hbs',{
			welcome_message: 'Hello World!!',
			session: req.session
		});
	}
	else {
		res.status(401).send('Unauthorized');
	}
});

site.get('/donate', (req,res) => {
	if (req.session.loggedIn) {
		res.render('donate.hbs',{
			welcome_message: 'Hello World!!',
			session: req.session
		});
	}
	else {
		res.status(401).send('Unauthorized');
	}
});

// To fake register request /register?role=watch or research or donate
site.get('/register', (req,res) => {
	req.session.loggedIn = 1;
	res.redirect(req.query.role);
});

// To fake login request /login?role=watch or research or donate
site.get('/login', (req,res) => {
	req.session.loggedIn = 1;
	res.redirect(req.query.role);
});

site.get('/logout', (req,res) => {
	req.session.destroy(()=>{
		res.redirect('/');
	});
});

site.listen(3003);
