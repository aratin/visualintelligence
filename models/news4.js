var keystone = require('keystone'),
	Types = keystone.Field.Types;

var News4 = new keystone.List('News4', {
	autokey: { from: 'name', path: 'key' }
});

News4.add({
	image: { type: Types.CloudinaryImage},
	date:{type: Date},
	news1: { type: String },
	
	
});

/** 
	Registration
	============
*/
News4.addPattern('standard meta');
News4.register();
