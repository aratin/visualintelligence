var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Differentiator = new keystone.List('Differentiator', {
	autokey: { from: 'name', path: 'key' }
});

Differentiator.add({
	differentiatorText: {type: Types.Textarea, initial: true },
	differentiatorImage: {type:Types.CloudinaryImage},
	differentiatorShortText: {type:String },
	differentiatorLongText: {type: Types.Textarea, initial: true },
	differentiatorSubImage: {type:Types.CloudinaryImage},
	differentiatorShortSubText: {type:String },
	differentiatorLongSubText: {type: Types.Textarea, initial: true },
	differentiatorSubStringImage: {type:Types.CloudinaryImage},
	differentiatorShortStringText: {type:String },
	differentiatorLongStringText: {type: Types.Textarea, initial: true },
	differentiatorSubtextImage: {type:Types.CloudinaryImage},
	differentiatorTextLong: {type:String },
	heading:{type:String},
});

/** 
	Registration
	============
*/
Differentiator.addPattern('standard meta');
Differentiator.register();
