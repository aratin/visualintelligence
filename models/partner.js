var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Partner = new keystone.List('Partner', {
	autokey: { from: 'name', path: 'key' }
});

Partner.add({
	partnerimage: {type: String},
	partnertext: {type: String},
	partnersubimage: {type: String},
	partnersubtext: {type: String},
	heading:{type:String},
});

/** 
	Registration
	============
*/
Partner.addPattern('standard meta');
Partner.register();
