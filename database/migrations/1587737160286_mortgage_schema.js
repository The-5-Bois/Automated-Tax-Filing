'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MortgageSchema extends Schema {
  up () {
    this.create('mortgages', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('mortgages')
  }
}

module.exports = MortgageSchema
