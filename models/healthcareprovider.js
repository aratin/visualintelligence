var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Healthcareprovider = new keystone.List('Healthcareprovider', {
	autokey: { from: 'name', path: 'key' }
});

Healthcareprovider.add({
	
	image:{ type: Types.CloudinaryImage},
	text: { type: String },
	subText: { type: String },
	shortText: { type: String },
	subString: { type: String },
	shortString: { type: String },
	heading:{type:String},
});

/** 
	Registration
	============
*/
Healthcareprovider.addPattern('standard meta');
Healthcareprovider.register();