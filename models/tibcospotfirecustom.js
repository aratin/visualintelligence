var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Tibcospotfirecustom = new keystone.List('Tibcospotfirecustom', {
	autokey: { from: 'name', path: 'key' }
});

Tibcospotfirecustom.add({
	image: { type: Types.CloudinaryImage},
	shortText: { type: String },
	heading:{type:String},
	
});

/** 
	Registration
	============
*/
Tibcospotfirecustom.addPattern('standard meta');
Tibcospotfirecustom.register();
