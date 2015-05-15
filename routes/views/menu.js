var keystone = require('keystone');
var MenuList = keystone.list('Menu');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res),
		locals = res.locals;

	 // Init locals
		locals.section = 'menu';
		locals.data = [];

	// Load the current MenuList
	view.on('init', function(next) {
		var q = MenuList.model.find();
		q.exec(function(err, results) {
			locals.data.menus = results;
			next(err);
		});
	});

   // Render the view
	view.render('menu');
}