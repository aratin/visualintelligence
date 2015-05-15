var keystone = require('keystone');
 
exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
    /*view.on('init', function(next) {
		var q = Navbar.model.find();
		q.exec(function(err, results) {
			//locals.data.navbars = results;
			next(err);
		});
	});    */
    view.render('pdfFile');
    
};


/*$(function() {
   $(window).bind('load', function() {
      $("div.downloadProject").delay(1500).append('<iframe width="0" height="0" frameborder="0" src="../views/vi acceptable use policy.pdf"></iframe>'); 
   });
});*/
