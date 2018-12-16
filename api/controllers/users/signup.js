module.exports = {


  friendlyName: 'Signup',


  description: 'Signup something.',


  inputs: {
    
    name: {
      type: 'string',
      required: true,
    },

    pass: {
      type: 'string',
      required: true,
    },

    email: {
      type: 'string',
      required: true,
      isEmail: true,
    },

  },


  exits: {
    
    emailExists: {
      description: 'The email is already connected to an existing user',
      responseType: 'emailExists',
    },

    // invalid: {
    //   description: 'The email/password/name is not valid.',
    //   responseType: 'badRequest',
    // },

    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/welcome',
    },

  },


  fn: async function (inputs, exits) {

    // Check if email already exists. If it does return error
    var newEmail = inputs.email.toLowerCase();
    var user = await Users.findOne({ emailAddress: newEmail });
    if (user) {return exits.emailExists();}

    // Build data for a new user account and add it to database.
    // Aslo use fetch to retrieve new userID
    var newUser = await newUser.create(Object.assign({
      emailAddress: newEmail,
      fullName: inputs.name,
      password: await sails.helpers.passwords.hashPassword(inputs.pass),
    }))
    .fetch();

    this.req.session.userID = newUser.id;

    // Send success if no problems
    return exits.success();
    
  }


};
