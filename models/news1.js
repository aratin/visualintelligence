var keystone = require('keystone'),
	Types = keystone.Field.Types;

var News1 = new keystone.List('News1', {
	autokey: { from: 'name', path: 'key' }
});

News1.add({
	image: { type: Types.CloudinaryImage},
	date:{type: Date},
	news1: { type: String },
	
	
});

/** 
	Registration
	============
*/
News1.addPattern('standard meta');
News1.register();
