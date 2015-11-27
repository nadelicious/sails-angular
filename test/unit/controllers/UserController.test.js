var request = require('supertest');

describe('UserController', function() {
    it('should get users and return success', function (done) {
      request(sails.hooks.http.app)
        .get('/user')
        .expect(200, done);
    });

    it('should create new user and return success', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .field( 'username', 'nad'  )
        .field( 'id', 5  )
        .field( 'email', 'nadskie@yahoo.com'  )
        .expect(201, done);
    });

    it('should get a user info and return success', function (done) {
      request(sails.hooks.http.app)
        .get('/user/1')
        .expect(function(res) {
	        res.body.id = 1;
	        res.body.username = 'ronald';
	    })
        .expect(200, done);
    });

    it('should update a user info and return success', function (done) {
      request(sails.hooks.http.app)
        .put('/user/1')
        .field( 'email', 'nad@yahoo.com'  )
        .expect(200, done);
    });

     it('should delete a user info and return success', function (done) {
      request(sails.hooks.http.app)
        .delete('/user/5')
         .field( 'username', 'nad'  )
        .expect(200, done);
    });
});