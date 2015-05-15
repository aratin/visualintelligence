var keystone = require('keystone');
var FooterList = keystone.list('Footer');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Init locals
		locals.section = 'footer';
		locals.data = [];

	// Load the current FooterList
	view.on('init', function(next) {
		var q = FooterList.model.find();
		q.exec(function(err, results) {
			locals.data.footers = results;
			next(err);
		});
	});
  
   // Render the view
	view.render('footer');
}