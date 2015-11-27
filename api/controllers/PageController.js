/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/**
   * Show dashboard page if session.authenticated =true
   *
   * @param {Object} req
   * @param {Object} res
   */
	'showDashboard' : function ( req, res ) {
		if ( !req.session.authenticated ) {
			return res.redirect( '/' );
		}

		return res.view( 'dashboard' );
	} 
};

