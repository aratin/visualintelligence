var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Lawenforcement = new keystone.List('Lawenforcement', {
	autokey: { from: 'name', path: 'key' }
});

Lawenforcement.add({
	text: {type: Types.Textarea, initial: true },
	image: {type:Types.CloudinaryImage},
	shortText: {type:String },
	longText: {type: Types.Textarea, initial: true },
	subImage: {type:Types.CloudinaryImage},
	heading:{type:String},
	
});

/** 
	Registration
	============
*/
Lawenforcement.addPattern('standard meta');
Lawenforcement.register();
