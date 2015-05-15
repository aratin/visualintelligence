var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Ecommerceportal = new keystone.List('Ecommerceportal', {
	autokey: { from: 'name', path: 'key' }
});

Ecommerceportal.add({
	image:{ type: Types.CloudinaryImage},
	text:{type:String},
	subText:{type:String}, 
	shortString:{type:String},
	longString:{type:String},
	heading:{type:String},
	
});

/** 
	Registration
	============
*/
Ecommerceportal.addPattern('standard meta');
Ecommerceportal.register();
