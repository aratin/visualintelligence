var keystone = require('keystone');
var Footermenunavigation = keystone.list('Footermenunavigation');

exports = module.exports = function(req, res) {

	// Init locals
	var view = new keystone.View(req, res),
		locals = res.locals;
		locals.section = 'footermenunavigation';
		locals.data = [];

	// Load Current Footermenunavigation
	view.on('init', function(next) {
		var q = Footermenunavigation.model.find();
		q.exec(function(err, results) {
			locals.data.footermenunavigations = results;
			next(err);
		});
	});

	//Render view
	view.render('footermenunavigation');
}