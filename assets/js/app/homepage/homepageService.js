( function () {
	'use strict';

	function homepageService ( $http, $q ) {
		function addUser ( params ) {
			var dfd = $q.defer();

			$http.post( '/auth/local/register', params )
			.then( function ( data ) { 
				dfd.resolve( data)
			} ).catch( function ( err ) { 
				dfd.reject( err );
			} );

			return dfd.promise;
		}

		function loginUser ( params ) {
			var dfd = $q.defer();

			$http.post( '/auth/local', params )
			.then( function ( data ) { 
				dfd.resolve( data)
			} ).catch( function ( err ) { 
				dfd.reject( err );
			} );

			return dfd.promise;
		}

		return {
			'addUser':   addUser,
			'loginUser': loginUser
		};
	}

	angular
		.module( 'app.homepage' )
		.factory( 'homepageService', homepageService );
} )( );
