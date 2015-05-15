var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Tibcospotfire = new keystone.List('Tibcospotfire', {
	autokey: { from: 'name', path: 'key' }
});

Tibcospotfire.add({
	image: { type: Types.CloudinaryImage},
	longText: { type: String },
	heading:{type:String},
	
});

/** 
	Registration
	============
*/
Tibcospotfire.addPattern('standard meta');
Tibcospotfire.register();
