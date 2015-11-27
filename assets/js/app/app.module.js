( function () { 
	'use strict';

	angular.module( 'app', [ 
		// libraries
		'ngSanitize',
		'ui.bootstrap',
		'ui.router',

		// core
		'app.core',

		//app
		'app.homepage',
		'app.dashboard'
	] );

} ( ) );