var keystone = require('keystone');
var Homepage = keystone.list('Homepage');
var Navbar = keystone.list('Navbar');


exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Init locals
		locals.section = 'homepage';
		locals.data = [];

	// Load the current HomePage
	view.on('init', function(next) {
		var q = Homepage.model.find();
		q.exec(function(err, results) {
			locals.data.homepages = results;
			next(err);
		});
	});
	
	// Render the view
	view.render('homepage');
}