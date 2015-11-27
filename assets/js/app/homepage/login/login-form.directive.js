( function () {
	'use strict';

	function loginForm ( ) {
		return {
			'templateUrl'  : '/js/app/homepage/login/login-form.html',
			'restrict'     : 'E',
			'controller'   : 'LoginCtrl',
			'controllerAs' : 'vm',
			'scope'        : true
		};
	}

	angular
		.module( 'app.homepage' )
		.directive( 'loginForm', loginForm );

} )( );