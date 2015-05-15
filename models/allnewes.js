var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Allnewes = new keystone.List('Allnewes', {
	autokey: { from: 'name', path: 'key' }
});

Allnewes.add({
	image1: { type: Types.CloudinaryImage},
	date1:{type: Date},
	news1: { type: String },
	image2: { type: Types.CloudinaryImage},
	date2:{type: Date},
	news2: { type: String },
	image3: { type: Types.CloudinaryImage},
	date3:{type: Date},
	news3: { type: String },
	image4: { type: Types.CloudinaryImage},
	date4:{type: Date},
	news4: { type: String },
	
});

/** 
	Registration
	============
*/
Allnewes.addPattern('standard meta');
Allnewes.register();
