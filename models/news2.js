var keystone = require('keystone'),
	Types = keystone.Field.Types;

var News2 = new keystone.List('News2', {
	autokey: { from: 'name', path: 'key' }
});

News2.add({
	image: { type: Types.CloudinaryImage},
	date:{type: Date},
	news1: { type: String },
	
	
});

/** 
	Registration
	============
*/
News2.addPattern('standard meta');
News2.register();
