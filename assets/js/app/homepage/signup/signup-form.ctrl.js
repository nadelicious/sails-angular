( function () {
	'use strict';

	function SignupCtrl ( homepageService, $toastr ) {
		var vm     = this;
		vm.loading = false;

		function register () {
			vm.loading = true;
			homepageService.addUser( {
				'username': vm.username,
				'email':    vm.email,
				'password': vm.password
			} ).then( function ( data ) { 
				$toastr.success( 'You are successfully registered.' );
			} ).catch( function () { 
				$toastr.error( 'Something went wrong.' );
			} ).finally( function () { 
				vm.username = null;
				vm.email    = null;
				vm.password = null;
				vm.loading  = false;
			} );
		}

		vm.register = register;
	}

	angular
		.module( 'app.homepage' )
		.controller( 'SignupCtrl', SignupCtrl );

	SignupCtrl.$inject = [ 'homepageService', '$toastr' ];

} )( );
