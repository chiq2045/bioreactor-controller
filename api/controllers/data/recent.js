module.exports = {


  friendlyName: 'Recent',


  description: 'Retrieve the most recent piece of data',


  inputs: {

  },


  exits: {
    success:{

    }
  },


  fn: async function (inputs, exits) {

    var getMostRecentData = `
    select id, ph, co2, temp
    from data
    order by id desc
    limit 1;
    `
    var mostRecent = await sails.sendNativeQuery(getMostRecentData)

    // var recentData = await Object.values(JSON.parse(JSON.stringify(mostRecent)))
    return exits.success(mostRecent.rows)
    
  }


};
