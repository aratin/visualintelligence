var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Visualbusinessintelligence = new keystone.List('Visualbusinessintelligence', {
	autokey: { from: 'name', path: 'key' }
});

Visualbusinessintelligence.add({
	heading:{type:String},
	image:{type:Types.CloudinaryImage},
	text:{ type: String },
	subText:{ type: String },
	shortString:{ type: String },
	longString:{ type: String },
	
});

/** 
	Registration
	============
*/
Visualbusinessintelligence.addPattern('standard meta');
Visualbusinessintelligence.register();
