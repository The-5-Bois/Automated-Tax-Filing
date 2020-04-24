'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeclareWifesIncomeSchema extends Schema {
  up () {
    this.create('declare_wifes_incomes', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('details_of_the_auditor', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('declare_wifes_incomes')
  }
}

module.exports = DeclareWifesIncomeSchema
