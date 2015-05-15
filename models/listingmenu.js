var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Listingmenu = new keystone.List('Listingmenu', {
	autokey: { from: 'name', path: 'key' }
});

Listingmenu.add({
	softwareProducts:{type:String},
	consulting: {type: String},
	datawarehouse:{type:String},
	visualbusiness:{type:String},
	predictivemodeling:{type:String},
	comparativebenchmarking:{type:String},
	geospaticalanalytics:{type:String},
	ecommerceportal:{type:String},
	businessprocessstrategy:{type:String},
	informationreporting:{type:String},
	socialmedia:{type:String},
	msp: {type: String},
	specialiseAnyalise: {type: String},
	technologyResale: {type: String},
	companyProfile:{type:String},
	mangementTeam:{type:String},
	differentiators:{type:String},
	careers:{type:String},
	contactUs:{type:String},
	partners:{type:String}
});

/** 
	Registration
	============
*/
Listingmenu.addPattern('standard meta');
Listingmenu.register();