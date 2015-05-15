var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Menu = new keystone.List('Menu', {
	autokey: { from: 'name', path: 'key' }
});

Menu.add({
	homeNavbar:{type: String},
	companyInfoNavbar:{type: String},
	offeringNavbar:{type: String},
	contactusNavbar:{type: String},
	signInNavbar:{type: String},
	softwareProductMenu:{type: String},
	consultingMenu:{type: String},
	mspMenu:{type: String},
	specializedMenu:{type: String},
	technologyMenu:{type: String},
	companyProfileMenu:{type:String},
	mangementTeamMenu:{type:String},
	differentiatorsMenu:{type:String},
	careersMenu:{type:String},
	contactusMenu:{type:String},
	partnersMenu:{type:String}
});

/** 
	Registration
	============
*/
Menu.addPattern('standard meta');
Menu.register();