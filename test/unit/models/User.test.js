describe( 'UserModel', function() {
    it( 'should be able to find users', function (done) {
    	User.find().exec(function(err, user) {
	      user.length.should.be.eql(fixtures['user'].length);
	      done();
	    });
    });

    it( 'should be able to create a user', function (done) {
    	var data = {
		    "username": "mwew",
		    "email": "meewee@yahoo.com",
		    "createdAt": "2015-11-27T13:49:44.923Z",
		    "updatedAt": "2015-11-27T13:49:44.923Z",
		    "id": 1
		};

    	User.create( data ).exec(function(err, newUser ) {
    		User.find().exec(function(err, user) {
		      user.length.should.be.eql(fixtures['user'].length + 1);
		      done();
		    });
	    });
    });

    it( 'should be able to find a user', function (done) {
    	User.findOne({ 'username': 'ronald' }).exec(function(err, found){
		  	found.should.have.property( 'username', 'ronald' );
		  	done();
		});
    });

    it( 'should be able to delete a user', function (done) {
    	User.destroy({ 'username':'mwew'}).exec(function(err){
		  User.find().exec(function(err, user) {
		      user.length.should.be.eql( 2 );
		      done();
		    });
		});
    });
});

