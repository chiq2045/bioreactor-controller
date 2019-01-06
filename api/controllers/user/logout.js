module.exports = {


  friendlyName: 'Logout',


  description: 'Logout user.',


  inputs: {

  },


  exits: {
    success: {

    },

    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function (exits) {

    // Clear the userID from this session
    delete this.req.session.userID

    // Send appropriate response
    if (!this.req.wantsJSON) {
      throw {redirect: '/'}
    } else {
      return exits.success()
    }

  }


};
