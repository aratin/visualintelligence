var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Businessprocessstrategy = new keystone.List('Businessprocessstrategy', {
	autokey: { from: 'name', path: 'key' }
});

Businessprocessstrategy.add({
	image:{ type: Types.CloudinaryImage},
	longText:{ type: String },
	heading:{type:String},
});

/** 
	Registration
	============
*/
Businessprocessstrategy.addPattern('standard meta');
Businessprocessstrategy.register();
