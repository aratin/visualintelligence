var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Navbar = new keystone.List('Navbar', {
	autokey: { from: 'name', path: 'key' }
});

Navbar.add({
	LogoPic: {type: String},
	mailPic: {type: String},
	mailstring:{type: String},
	contactPic:{type: String},
	contactstring:{type: String}
});

/** 
	Registration
	============
*/
Navbar.addPattern('standard meta');
Navbar.register();