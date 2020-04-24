'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IncomeFromForeignCountrySchema extends Schema {
  up () {
    this.create('income_from_foreign_countries', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('r_dtaa_credits', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('income_from_foreign_countries')
  }
}

module.exports = IncomeFromForeignCountrySchema
