var mongoose = require('mongoose');

//creating schema

var profileSchema = mongoose.Schema({
	name: String,
	college: String,
	course: String,
	semester: Number, 
	contact: Number, 
	email: String,
	fb: String,
	pdffile: String,
});

var Profile = module.exports = mongoose.model('Profile',profileSchema);

module.exports.getProfiles = function(callback,limit){
	Profile.find(callback).limit(limit);
}