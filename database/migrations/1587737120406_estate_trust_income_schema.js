'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstateTrustIncomeSchema extends Schema {
  up () {
    this.create('estate_trust_incomes', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('h_estate_trust_income', 254)
      table.integer('return_period_id').unsigned().references('id').inTable('return_periods')
      table.timestamps()
    })
  }

  down () {
    this.drop('estate_trust_incomes')
  }
}

module.exports = EstateTrustIncomeSchema
