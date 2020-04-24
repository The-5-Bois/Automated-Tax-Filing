'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeclareWifesIncomeSchema extends Schema {
  up () {
    this.create('declare_wifes_incomes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('declare_wifes_incomes')
  }
}

module.exports = DeclareWifesIncomeSchema
