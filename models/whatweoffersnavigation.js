var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Whatweoffersnavigation = new keystone.List('Whatweoffersnavigation', {
	autokey: { from: 'name', path: 'key' }
});

Whatweoffersnavigation.add({
	analyticsportal:{type:String},
	tibcospotfiremanaged:{type:String},
	marketresearch:{type:String},
	tibcospotfirecustom:{type:String},
});

Whatweoffersnavigation.addPattern('standard meta');
Whatweoffersnavigation.register();

