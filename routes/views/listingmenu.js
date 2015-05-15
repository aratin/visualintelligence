var keystone = require('keystone');
var Listingmenu = keystone.list('Listingmenu');
var Post = keystone.list('Post');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
			locals = res.locals;

		locals.section = 'listingmenu';
		locals.filters = {
			post: req.params.post
		};
		locals.data = [];

	view.on('init', function(next) {
		var q = Listingmenu.model.find();
		q.exec(function(err, results) {
			locals.data.listingmenus = results;
			next(err);
		});
	});

	view.render('listingmenu');
}