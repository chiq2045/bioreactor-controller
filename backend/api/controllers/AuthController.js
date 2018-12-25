/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');

module.exports = {
  

  /**
   * `AuthController.login()`
   */
  login: async function (req, res) {
    passport.authenticate('local', function(err, user, info) {
      if ((er) || (!user)) {
        return res.send({
          message: info.message,
          user
        })
      }

      req.logIn(user, function(err) {
        if (err) res.send(err)
        return res.send( {
          message: info.message,
          user
        })
      })
    })(req, res)
  },
  

  /**
   * `AuthController.logout()`
   */
  logout: async function (req, res) {
    req.logout()
    res.redirect('/');
  }


};

