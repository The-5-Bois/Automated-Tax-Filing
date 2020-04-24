'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommercialVehicleSchema extends Schema {
  up () {
    this.create('commercial_vehicles', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('commercial_vehicles')
  }
}

module.exports = CommercialVehicleSchema
