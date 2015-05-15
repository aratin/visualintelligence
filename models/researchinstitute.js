var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Researchinstitute = new keystone.List('Researchinstitute', {
	autokey: { from: 'name', path: 'key' }
});

Researchinstitute.add({
	
	image:{ type: Types.CloudinaryImage},
	text: { type: String },
	subText: { type: String },
	shortText: { type: String },
	heading:{type:String},
	
});

/** 
	Registration
	============
*/
Researchinstitute.addPattern('standard meta');
Researchinstitute.register();