var keystone = require('keystone'),
	Types = keystone.Field.Types;

var CompanyInfoListMenu = new keystone.List('CompanyInfoListMenu', {
	autokey: { from: 'name', path: 'key' }
});

CompanyInfoListMenu.add({
	companyProfile:{type:String},
	mangementTeam:{type:String},
	differentiators:{type:String},
	careers:{type:String},
	contactUs:{type:String},
	partners:{type:String}
});

CompanyInfoListMenu.addPattern('standard meta');
CompanyInfoListMenu.register();