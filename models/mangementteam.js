var keystone = require('keystone'),
	Types = keystone.Field.Types;

var MangementTeam = new keystone.List('MangementTeam', {
	autokey: { from: 'name', path: 'key' }
});

MangementTeam.add({
	image:{ type: Types.CloudinaryImage},
	mangementTeamtext: { type: String },
	mangementTeamsubtext: { type: String },
	mangementTeamshortstring: { type: Types.Textarea, initial: true },
	mangementTeamlongstring: { type: String },
	heading:{type:String},
});

/** 
	Registration
	============
*/
MangementTeam.addPattern('standard meta');
MangementTeam.register();
