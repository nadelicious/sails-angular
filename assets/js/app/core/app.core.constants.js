( function () { 
	'use strict';

	angular.module( 'app.core' )
	.constant( '$toastr', window.toastr )
	.constant( '$title', 'Sails-Angular' );

} ( ) );