'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommercialVehicleSchema extends Schema {
  up () {
    this.create('commercial_vehicles', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('p_advance_tax_credits', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('commercial_vehicles')
  }
}

module.exports = CommercialVehicleSchema
