( function () {
	'use strict';

	function signupForm ( ) {
		return {
			'templateUrl'  : '/js/app/homepage/signup/signup-form.html',
			'restrict'     : 'E',
			'controller'   : 'SignupCtrl',
			'controllerAs' : 'vm',
			'scope'        : true
		};
	}

	angular
		.module( 'app.homepage' )
		.directive( 'signupForm', signupForm );

} )( );