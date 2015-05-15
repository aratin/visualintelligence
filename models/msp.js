var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Msp = new keystone.List('Msp', {
	autokey: { from: 'name', path: 'key' }
});

Msp.add({
	offerhead:{type:String},
	mspImages:{ type: Types.CloudinaryImage},
	softwareProducts:{type: String},
	mspSolutions:{type: String},
	mspSolutionstext: { type: Types.Textarea, initial: true },
	consulting: {type: String},
	msp: {type: String},
	specialiseAnyalise: {type: String},
	technologyResale: {type: String},
	heading:{type:String},
});

/** 
	Registration
	============
*/
Msp.addPattern('standard meta');
Msp.register();