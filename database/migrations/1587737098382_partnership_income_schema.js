'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PartnershipIncomeSchema extends Schema {
  up () {
    this.create('partnership_incomes', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('g_partnership_income', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('partnership_incomes')
  }
}

module.exports = PartnershipIncomeSchema
