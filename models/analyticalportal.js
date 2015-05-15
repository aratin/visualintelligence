var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Analyticalportal = new keystone.List('Analyticalportal', {
	autokey: { from: 'name', path: 'key' }
});

Analyticalportal.add({
	image: { type: Types.CloudinaryImage},
	longText: { type: String },
	heading:{type:String},
});

/** 
	Registration
	============
*/
Analyticalportal.addPattern('standard meta');
Analyticalportal.register();
