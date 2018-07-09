var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Profile = require('../models/Profiles');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nepal' });
});

router.post('/insert', function (req,res){

	var profile = new Profile(req.body);

	profile.save(function(err, doc){
		if (err) throw err;
		res.redirect('/profile');
	});
	
});

router.get('/profile', function(req, res) {
 	Profile.getProfiles(function(err, profiles){
 		console.log('data..........',profiles[0]);
 		if (err) throw err;
 		res.render('profile', {title: 'My profile', profiles});
 	})
});


router.get('/update/:id', function(req,res){
	Profile.findOne({_id: req.params.id}, function(err, profile){
		res.render('update', {profile});
		if (err) throw err;
	})
});

router.post('/update', function(req,res){
	Profile.findOneAndUpdate({_id: req.body},function(err,doc){
		if (err) throw err;
		res.redirect('/profile');
	})

});

router.get('/delete/:id', function(req, res){
	Profile.findOneAndRemove({_id: req.params.id}, function(err, doc){
		if (err) throw err;
		res.redirect('/');
	})
})

module.exports = router;
