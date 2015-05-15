var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Consultingservice = new keystone.List('Consultingservice', {
	autokey: { from: 'name', path: 'key' }
});

Consultingservice.add({
	consultingService:{type:String},
	consultingServiceimage:{ type: Types.CloudinaryImage},
	consultingServicetext:{ type: Types.Textarea, initial: true },
	heading:{type:String},
});

/** 
	Registration
	============
*/
Consultingservice.addPattern('standard meta');
Consultingservice.register();