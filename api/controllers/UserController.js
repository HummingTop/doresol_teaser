/**
 * UserController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
  /**
   * Action blueprints:
   *    `/user/create`
   */
   create: function (req, res) {
    var email = req.param('email');
    
    User.create({
      emailAddress: email
    }).done(function(err, user) {
      // Error handling
      if (err) {
        req.flash('result', 'fail');
      }else {
        req.flash('result', 'success');
      }

      return res.redirect('/#sign');
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
