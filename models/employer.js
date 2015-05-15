var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Employer = new keystone.List('Employer', {
	autokey: { from: 'name', path: 'key' }
});

Employer.add({
	
	image:{ type: Types.CloudinaryImage},
	longText: { type: Types.Textarea, initial: true },
	heading:{type:String},
});

/** 
	Registration
	============
*/
Employer.addPattern('standard meta');
Employer.register();