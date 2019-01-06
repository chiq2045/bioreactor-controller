module.exports = {


  friendlyName: 'Register',


  description: 'Register user.',


  inputs: {
    fullName: {
      type: 'string',
      required: true,
    },

    emailAddress: {
      type: 'string',
      required: true,
      isEmail: true,
    },

    password: {
      type: 'string',
      required: true,
    }
  },


  exits: {
    success: {
      
    }
  },


  fn: async function (inputs, exits) {

    var newEmail = inputs.emailAddress.toLowerCase()
    var newPassword = await sails.helpers.passwords.hashPassword(inputs.password)

    var newUser = newUser.create(Object.assign({
      emailAddress: newEmail,
      password: newPassword,
      fullName: inputs.fullName
    }))
    .fetch()

    this.req.session.userID = newUser.id

    return exits.success()
  }


};
