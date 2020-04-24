'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MortgageSchema extends Schema {
  up () {
    this.create('mortgages', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('j_computation_of_mortgage', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('mortgages')
  }
}

module.exports = MortgageSchema
