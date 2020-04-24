'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployerProvidedCarSchema extends Schema {
  up () {
    this.create('employer_provided_cars', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('i_computation_of_car_benefit', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('employer_provided_cars')
  }
}

module.exports = EmployerProvidedCarSchema
