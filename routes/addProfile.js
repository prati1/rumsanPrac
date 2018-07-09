router.post('/insert', function (req,res){

	var profile = new Profile(req.body);

	profile.save(function(err, doc){
		if (err) throw err;
		res.redirect('/profile');
	});
	
});