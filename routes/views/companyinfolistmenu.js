var keystone = require('keystone');
var CompanyInfoListMenu = keystone.list('CompanyInfoListMenu');

exports = module.exports = function(req, res) {

	// Init locals
	var view = new keystone.View(req, res),
		locals = res.locals;
		locals.section = 'companyinfolistmenu';
		locals.data = [];

	// Load Current Companyinfolistmenu
	view.on('init', function(next) {
		var q = CompanyInfoListMenu.model.find();
		q.exec(function(err, results) {
			locals.data.companyinfolistmenus = results;
			next(err);
		});
	});

	//Render view
	view.render('companyinfolistmenu');
}