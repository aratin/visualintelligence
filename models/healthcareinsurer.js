var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Healthcareinsurer = new keystone.List('Healthcareinsurer', {
	autokey: { from: 'name', path: 'key' }
});

Healthcareinsurer.add({
	
	image:{ type: Types.CloudinaryImage},
	longText: { type: Types.Textarea, initial: true },
	longString: { type: Types.Textarea, initial: true },
	heading:{type:String},
});

/** 
	Registration
	============
*/
Healthcareinsurer.addPattern('standard meta');
Healthcareinsurer.register();