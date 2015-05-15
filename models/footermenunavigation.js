var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Footermenunavigation = new keystone.List('Footermenunavigation', {
	autokey: { from: 'name', path: 'key' }
});

Footermenunavigation.add({
	healthcareinsurer:{type:String},
	healthcareprovider:{type:String},
	employer:{type:String},
	pharmaceutical:{type:String},
	researchinstitute:{type:String},
	lifestyleindustry:{type:String},
	crm:{type:String},
	lawenforcement:{type:String},
});
  
Footermenunavigation.addPattern('standard meta');
Footermenunavigation.register();