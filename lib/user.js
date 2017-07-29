var lowdb = require('lowdb');

var db = lowdb('../db.json');

function User () {
	this.roles = [];
}

User.prototype = {
	name: null,
	username: null,
	email: null,
	roles: null, // watchdog, researcher, donor
	loginType: 'local', // local, facebook, google
	phone: null,
	organisation: null,
	id: null
}

User.prototype.data = function () {
	return {
		name: this.name,
		username: this.username,
		email: this.email,
		roles: this.roles, // watchdog, researcher, donor
		loginType: this.loginType, // local, facebook, google
		phone: this.phone,
		organisation: this.organisation,
		id: this.id
	}
}

User.prototype.save = function () {
	this.id = db.get('users').size().value();
	db.get('users').push(this.data()).write();
}

User.load = function (email) {
	var user = new User();
	var data = db.get('users').find({email:email}).value();

	for (var x in data) {
		user[x] = data[x];
	}
	
	return user;
}

module.exports = User;
