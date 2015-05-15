var keystone = require('keystone');
var Consultingservicesubmenu = keystone.list('Consultingservicesubmenu');

exports = module.exports = function(req, res) {

	// Init locals
	var view = new keystone.View(req, res),
		locals = res.locals;
		locals.section = 'consultingservicesubmenu';
		locals.data = [];

	// Load Current Consultingservicesubmenu
	view.on('init', function(next) {
		var q = Consultingservicesubmenu.model.find();
		q.exec(function(err, results) {
			locals.data.consultingservicesubmenus = results;
			next(err);
		});
	});

	//Render view
	view.render('consultingservicesubmenu');
}