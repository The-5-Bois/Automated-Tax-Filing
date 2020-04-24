'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OtherSourceOfIncomeSchema extends Schema {
  up () {
    this.create('other_source_of_incomes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('other_source_of_incomes')
  }
}

module.exports = OtherSourceOfIncomeSchema
