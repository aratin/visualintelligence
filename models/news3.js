var keystone = require('keystone'),
	Types = keystone.Field.Types;

var News3 = new keystone.List('News3', {
	autokey: { from: 'name', path: 'key' }
});

News3.add({
	image: { type: Types.CloudinaryImage},
	date:{type: Date},
	news1: { type: String },
	
	
});

/** 
	Registration
	============
*/
News3.addPattern('standard meta');
News3.register();
