/**
 * emailExists.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.emailExists();
 *     // -or-
 *     return res.emailExists(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'emailExists'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function emailExists() {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  // Define the status code to send in the response.
  var statusCodeToSet = 409;

  // Send log to console describing action taken
  sails.log.info('Ran custom response: res.emailExists()');
  
  // Send status code if needed
  if (req.wantsJSON) {
    return res.sendStatus(statusCodeToSet);
  }
  // Otherwise, send them to retry signin page
  else {
    // Log the user out if they were logged in
    if (req.session.userId) {
      delete req.session.userId;
    }

    return res.redirect('/retry');
  }

};
