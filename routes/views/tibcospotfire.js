var keystone = require('keystone');
var Tibcospotfire = keystone.list('Tibcospotfire');
var Navbar = keystone.list('Navbar');
var MenuList = keystone.list('Menu');
var FooterList = keystone.list('Footer');
var Whatweoffersnavigation = keystone.list('Whatweoffersnavigation');
//var Message = keystone.list('Message');


exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Init locals
		locals.section = 'tibcospotfire';
		locals.data = [];

	// Load the current Analyticalportal
	view.on('init', function(next) {
		var q = Tibcospotfire.model.find();
		q.exec(function(err, results) {
			locals.data.tibcospotfires = results;
			next(err);
		});
	});

	// Load the current Navbar
	view.on('init', function(next) {
		var q = Navbar.model.find();
		q.exec(function(err, results) {
			locals.data.navbars = results;
			next(err);
		});
	});

	// Load the current MenuList
	view.on('init', function(next) {
		var q = MenuList.model.find();
		q.exec(function(err, results) {
   			locals.data.menus = results;
			next(err);
		});
	});

	// Load the current FooterList
	view.on('init', function(next) {
		var q = FooterList.model.find();
		q.exec(function(err, results) {
   			locals.data.footers = results;
			next(err);
		});
	});

	// Load the current Whatweoffersnavigation
	view.on('init', function(next) {
		var q = Whatweoffersnavigation.model.find();
		q.exec(function(err, results) {
			locals.data.whatweoffersnavigations = results;
			next(err);
		});
	});
	
	// Render the view
	view.render('tibcospotfire');
}