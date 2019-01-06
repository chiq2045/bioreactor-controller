module.exports = {


  friendlyName: 'List',


  description: 'Retrieves a specified number of data points',


  inputs: {
    points: {
      type: 'number'
    }
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
    limit ${inputs.points};
    `
    var mostRecent = await sails.sendNativeQuery(getMostRecentData)

    // var recentData = await Object.values(JSON.parse(JSON.stringify(mostRecent)))
    return exits.success(mostRecent.rows)
    
  }


};