var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Datawarehouse = new keystone.List('Datawarehouse', {
	autokey: { from: 'name', path: 'key' }
});

Datawarehouse.add({
	text:{type:String},
	image:{ type: Types.CloudinaryImage},
	subText:{ type: Types.Textarea, initial: true },
	shortText:{ type: Types.Textarea, initial: true },
	shortString:{ type: Types.Textarea, initial: true },
	heading:{type:String},

});

/** 
	Registration
	============
*/
Datawarehouse.addPattern('standard meta');
Datawarehouse.register();