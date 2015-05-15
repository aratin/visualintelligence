var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Predictivemodeling = new keystone.List('Predictivemodeling', {
	autokey: { from: 'name', path: 'key' }
});

Predictivemodeling.add({
	image:{type:Types.CloudinaryImage},
	text:{type:String},
	subText:{ type: Types.Textarea, initial: true },
	shortString:{ type: Types.Textarea, initial: true },
	heading:{type:String},
	
});

/** 
	Registration
	============
*/
Predictivemodeling.addPattern('standard meta');
Predictivemodeling.register();