( function () { 
	'use strict';

	function DashboardCtrl ( $title ) {
		var vm = this;

		vm.title  = $title;
	} 

	angular.module( 'app.dashboard' )
	.controller( 'DashboardCtrl', DashboardCtrl );

	DashboardCtrl.$inject = [ '$title' ];
} ( ) );
