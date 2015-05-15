var keystone = require('keystone'),
	Types = keystone.Field.Types;

var TechnologyResale = new keystone.List('TechnologyResale', {
	autokey: { from: 'name', path: 'key' }
});

TechnologyResale.add({
	technologyResale:{type:String},
	technologyResaleimage: { type: Types.CloudinaryImage},
	technologyResaletext: { type: Types.Textarea, initial: true },
	heading:{type:String},
});

/** 
	Registration
	============
*/
TechnologyResale.addPattern('standard meta');
TechnologyResale.register();