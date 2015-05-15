var keystone = require('keystone');
var Visualbusinessintelligence = keystone.list('Visualbusinessintelligence');
var Navbar = keystone.list('Navbar');
var MenuList = keystone.list('Menu');
var FooterList = keystone.list('Footer');
var Listingmenu = keystone.list('Listingmenu');


exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Init locals
		locals.section = 'visualbusinessintelligence';
		locals.data = [];

	// Load the current Visualbusinessintelligence
	view.on('init', function(next) {
		var q = Visualbusinessintelligence.model.find();
		q.exec(function(err, results) {
			locals.data.visualbusinessintelligences = results;
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

		// Load the current ListingMenu
	view.on('init', function(next) {
		var q = Listingmenu.model.find();
		q.exec(function(err, results) {
			locals.data.listingmenus = results;
			next(err);
		});
	});
	
	// Render the view
	view.render('visualbusinessintelligence');
}