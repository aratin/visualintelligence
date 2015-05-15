var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('pyf4snChZI5bxR-6D1bg4g');
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email},
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: 'Just leaving a message' },
		{ value: 'question', label: 'I\'ve got a question' },
		{ value: 'other', label: 'Something else...' }
	] },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now }
});

Enquiry.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
});

Enquiry.schema.post('save', function() {
	if (this.wasNew) {
		console.log('in save');
		this.sendNotificationEmail();
	}
});

Enquiry.schema.methods.sendNotificationEmail = function(callback) {
	console.log('in notification send');
	if ('function' !== typeof callback) {
		callback = function() {};
	}
	
	var enquiry = this;
	var async = false;
	var ip_pool = "Main Pool";
	var send_at = new Date();
	var message = enquiry;	
	
	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {		
		if (err) return callback(err);		
		/*mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
		    console.log(result)		   
		}, function(e) {
		    // Mandrill returns the error as an object with name and message keys
		    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
		    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
		});*/
		
		new keystone.Email('enquiry-notification').send({
			to: 'arati.nankar@planetria.com',
			from: {
				name: 'mandrill-keystone-demo',
				email: 'varsha.gawali@planetria.com'
			},
			subject: 'New Enquiry for mandrill-keystone-demo',
			enquiry: enquiry
		}, callback);
		console.log('Email sent');
	});
	
};

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
