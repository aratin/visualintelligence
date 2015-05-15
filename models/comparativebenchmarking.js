var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Comparativebenchmarking = new keystone.List('Comparativebenchmarking', {
	autokey: { from: 'name', path: 'key' }
});

Comparativebenchmarking.add({
	image:{ type: Types.CloudinaryImage},
	text:{type:String},
	subText:{type:String}, 
	shortString:{type:String},
	longString:{type:String},
	subString:{type:String},
	heading:{type:String},
	
});

/** 
	Registration
	============
*/
Comparativebenchmarking.addPattern('standard meta');
Comparativebenchmarking.register();
