var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Career = new keystone.List('Career', {
	autokey: { from: 'name', path: 'key' }
});

Career.add({
	careerImage: { type: Types.CloudinaryImage},
	careerText: { type: Types.Textarea, initial: true },
	careerSubtext: {type: String},
	careerSubstring: { type: String },
	careerShorttext: { type: String },
	careerShortstring: { type: String },
	careerEmail:{type: Types.Email},
	heading:{type:String},
});

/** 
	Registration
	============
*/
Career.addPattern('standard meta');
Career.register();
