module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    emailAddress: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {

    },

    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {

    // Lookup email address
    var userRecord = await User.findOne({
      emailAddress: inputs.emailAddress.toLowerCase()
    })

    // Redirect to login screen if user not found
    if (!userRecord) {
      throw {redirect: '/'}
    }

    // Redirect to login if password does not match
    await sails.helpers.password.checkPassword(inputs.password, userRecord.password)
    .intercept('incorrect', 'redirect')

    return exits.success()

  }


};
