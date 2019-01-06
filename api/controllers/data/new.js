module.exports = {


  friendlyName: 'New',


  description: 'Creates a new record for data',


  inputs: {
    ph: {
      type: 'number',
      columnType: 'float'
    },

    co2: {
      type: 'number',
      columnType: 'float'
    },

    temp: {
      type: 'number',
      columnType: 'float'
    },
  },


  exits: {
    success: {

    },
  },


  fn: async function (inputs, exits) {

    await Data.create(Object.assign({
      ph: inputs.ph,
      co2: inputs.co2,
      tmep: inputs.temp
    }))

    return exits.success()
  }


};
