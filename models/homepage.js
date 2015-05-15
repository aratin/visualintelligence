var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Homepage = new keystone.List('Homepage', {
	autokey: { from: 'name', path: 'key' }
});

Homepage.add({
	bannerPic:{ type: Types.CloudinaryImage},
	whatweoffertitle:{type: String},
	Analyaticalporttalstring: { type: String, required: true },
   	Integrationastring: { type: String, required: true },
	Environmentstring: { type: String, required: true },
	Analyaticalshortstring: { type: String, required: true },
	Analyaticallongstring: { type: String, required: true },
	TibcoSpotfireManaged: { type: String, required: true },
    SolutionData: { type: String, required: true },
	CenterHosting: { type: String, required: true },
	TibcoSpotshortstring: { type: String, required: true },
	TibcoSpotlongstring: { type: String, required: true },
	MarketResearch: { type: String, required: true },
    SocialMedia: { type: String, required: true },
	Analytics: { type: String, required: true },
	MarketResearchshortstring: { type: String, required: true },
	MarketResearchlongstring: { type: String, required: true },
	TibcoSpotfireCustom: { type: String, required: true },
    SolutionDevelopment: { type: String, required: true },
	Operations: { type: String, required: true },
	TibcoSpotfireCustomshortstring: { type: String, required: true },
	TibcoSpotfireCustomlongstring: { type: String, required: true },
	Aboutusstring: { type: String, required: true },
	Aboutustextarea: { type: Types.Textarea, initial: true },
	NewsAndUpdatetitle:{type: String},
	image:{ type: Types.CloudinaryImage},
	date:{type: Date},
	news1:{type: String},
	image1:{ type: Types.CloudinaryImage},
	date:{type: Date},
	news2:{type: String},
});

/** 
	Registration
	============
*/
Homepage.addPattern('standard meta');
Homepage.register();