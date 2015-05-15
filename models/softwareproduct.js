var keystone = require('keystone'),
	Types = keystone.Field.Types;

var SoftwareProduct = new keystone.List('SoftwareProduct', {
	autokey: { from: 'name', path: 'key' }
});

SoftwareProduct.add({
	softwareProducts:{type:String},
	softwareProductsImages:{ type: Types.CloudinaryImage,publicID: 'slug'},
	softwareProucttext: { type: Types.Textarea, initial: true },
	heading:{type:String},
});

/** 
	Registration
	============
*/
SoftwareProduct.addPattern('standard meta');
SoftwareProduct.register();