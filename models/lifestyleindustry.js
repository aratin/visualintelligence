var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Lifestyleindustry = new keystone.List('Lifestyleindustry', {
	autokey: { from: 'name', path: 'key' }
});

Lifestyleindustry.add({
	
	image:{ type: Types.CloudinaryImage},
	heading:{type:String},
});

/** 
	Registration
	============
*/
Lifestyleindustry.addPattern('standard meta');
Lifestyleindustry.register();