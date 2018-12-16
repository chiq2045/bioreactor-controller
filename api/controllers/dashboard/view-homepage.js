module.exports = {


  friendlyName: 'View homepage',


  description: 'Display "" page.',


  exits: {

    success: {
      description: 'If user is a quest, send to hpmepage',
      statusCode: 200,
      viewTemplatePath: 'pages/dashboard/homepage'
    },

    redirect: {
      description: 'If user is logged in, redierct to welcome page',
      responseType: 'redirect',
    }

  },


  fn: async function (exits) {

    if (this.req.me) {
      return exits.redirect('/welcome');
    }

    return exits.success();

  },


};
