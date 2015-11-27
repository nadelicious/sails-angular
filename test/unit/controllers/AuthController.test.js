var request = require('supertest');
var agent   = request.agent( 'http://localhost:1337' );

 describe('AuthController', function() {
   it('should logout', function (done) {
	    agent.get('/logout')
	    .expect( '200' )
	    .end(function (err, res) {
	        done();
	    });
	});

   it('should be able to to login', function (done) {
	    agent.post('/auth/local')
	    .expect( '200' )
	    .end(function (err, res) {
	        done();
	    });
	});

   it('should be able to to register', function (done) {
	    agent.post('/auth/local/register')
	    .expect( '200' )
	    .end(function (err, res) {
	        done();
	    });
	});
  });