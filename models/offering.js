var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Offering = new keystone.List('Offering', {
	autokey: { from: 'name', path: 'key' }
});

Offering.add({
	offeringImage:{type: Types.CloudinaryImage},
	heading:{type:String},
});

/** 
	Registration
	============
*/
Offering.addPattern('standard meta');
Offering.register();