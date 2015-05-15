var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Footer = new keystone.List('Footer', {
	autokey: { from: 'name', path: 'key' }
});

Footer.add({
	Policytitle:{type: String},
	OurSolutionstitle:{type: String},
	Pdfimage:{type: String},
	visuallink:{type: String},
	visualsublink:{type: String},
	HealthcareInsurers:{type: String},
	HealthcareProviders:{type: String},
	Employers:{type: String},
	Pharmaceuticals:{type: String},
	LifestyleIndustry:{type: String},
	ResearchInstitutes:{type: String},
	CRM:{type: String},
	LawEnforcement:{type: String},
	ContactUstitle:{type: String},
    VisualIntelligencefooter:{type: String},
    footeraddress:{type: String},
    footeremail:{type: Types.Email},
	FollowUs: { type: String},
	facebookimage:{ type: String},
	linkdinimage:{ type: String}
});

/** 
	Registration
	============
*/
Footer.addPattern('standard meta');
Footer.register();