var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Marketresearch = new keystone.List('Marketresearch', {
	autokey: { from: 'name', path: 'key' }
});

Marketresearch.add({
	image: { type: Types.CloudinaryImage},
	longText: { type: String },
	heading:{type:String},
	
});

/** 
	Registration
	============
*/
Marketresearch.addPattern('standard meta');
Marketresearch.register();
