( function () { 
	'use strict';

	function HomepageCtrl ( $title ) {
		var vm = this;

		vm.title  = $title;
	} 

	angular.module( 'app.homepage' )
	.controller( 'HomepageCtrl', HomepageCtrl );

	HomepageCtrl.$inject = [ '$title' ];
} ( ) );
