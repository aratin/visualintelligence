var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Pharmaceutical = new keystone.List('Pharmaceutical', {
	autokey: { from: 'name', path: 'key' }
});

Pharmaceutical.add({
	
	image:{ type: Types.CloudinaryImage},
	heading:{type:String},
});

/** 
	Registration
	============
*/
Pharmaceutical.addPattern('standard meta');
Pharmaceutical.register();