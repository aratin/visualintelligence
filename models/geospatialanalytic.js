var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Geospatialanalytic = new keystone.List('Geospatialanalytic', {
	autokey: { from: 'name', path: 'key' }
});

Geospatialanalytic.add({
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
Geospatialanalytic.addPattern('standard meta');
Geospatialanalytic.register();
