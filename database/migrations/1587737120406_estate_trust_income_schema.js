'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstateTrustIncomeSchema extends Schema {
  up () {
    this.create('estate_trust_incomes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('estate_trust_incomes')
  }
}

module.exports = EstateTrustIncomeSchema
