( function () { 
	'use strict';

	function LoginCtrl ( $toastr, homepageService ) {
		var vm = this;

		vm.loading    = false;

		function login () {
			vm.loading = true;
			homepageService.loginUser( {
				'identifier': vm.identifier,
				'password':   vm.password
			} ).then( function ( data ) { 
				window.location = '/dashboard';
			} ).catch( function () {
				$toastr.error( 'Something went wrong.' );
			} ).finally( function () { 
				vm.identifier = null;
				vm.password   = null;
				vm.loading    = false;
			} );
		}

		vm.login = login;
	} 

	angular.module( 'app.homepage' )
	.controller( 'LoginCtrl', LoginCtrl );

	LoginCtrl.$inject = [ '$toastr', 'homepageService' ];
} ( ) );
