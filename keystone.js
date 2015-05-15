// Load .env for development environments
require('dotenv').load();

var keystone = require('keystone');

/**
 * Application Initialisation
 */
console.log("keystone.js started", keystone);
keystone.init({
	
	'name': 'Visual Intelligence',
	'brand': 'Visual Intelligence',
	
	'favicon': 'public/favicon.ico',
	'less': 'public',
	'static': 'public',
	
	'views': 'templates/views',
	'view engine': 'jade',
	
	'emails': 'templates/emails',

	'auto update': true,
	'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/ayush-keystone-demo',
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'Visual Intelligence',
	'mandrill api key': process.env.MANDRILL_API_KEY || 'pyf4snChZI5bxR-6D1bg4g',
	
	//'ga property': process.env.GA_PROPERTY,
	//'ga domain': process.env.GA_DOMAIN,
	
	//'chartbeat property': process.env.CHARTBEAT_PROPERTY,
	//'chartbeat domain': process.env.CHARTBEAT_DOMAIN

});

require('./models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	ga_property: keystone.get('ga property'),
	ga_domain: keystone.get('ga domain'),
	chartbeat_property: keystone.get('chartbeat property'),
	chartbeat_domain: keystone.get('chartbeat domain')
});

keystone.set('routes', require('./routes'));

//keystone.set('routes', require('./keystone/routes'));
//keystone.set('templates', require('./admin/templates'));

keystone.set('cloudinary config', { cloud_name: 'hs07p4dmn', api_key: '274679539577615', api_secret: 'WMG8Ig1GDZUY-3p-w2LmxKgFXl0' });
// or
keystone.set('cloudinary config', 'cloudinary://api_key:api_secret@cloud_name' );
 
// optional, will prefix all built-in tags with 'keystone_'
keystone.set('cloudinary prefix', 'keystone');
 
// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
keystone.set('cloudinary folders', true);
 
// optional, will force cloudinary to serve images over https
keystone.set('cloudinary secure', true);

//keystone.set('mandrill api key', 'pyf4snChZI5bxR-6D1bg4g');
//keystone.set('mandrill username', 'varsha.gawali@planetria.com');
//keystone.set('emailtemplate', 'templates/views/contactlist.jade');


keystone.set('nav', {
	'homepages': 'homepages',
	'companyprofiles': 'companyprofiles',
	'offerings': 'offerings',
	'navbars': 'navbars',
	'menus': 'menus',
	'footers': 'footers'
});
keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7'
		}
	}
});

keystone.set('email rules', [{
	find: '/images/',
	replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/images/' : 'http://localhost:3000/images/'
}, {
	find: '/keystone/',
	replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/keystone/' : 'http://localhost:3000/keystone/'
}]);

keystone.set('email tests', require('./routes/emails'));

keystone.start();
