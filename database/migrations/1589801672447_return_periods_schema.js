'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReturnPeriodsSchema extends Schema {
  up () {
    this.create('return_periods', (table) => {
      table.increments()
      table.string('return_period', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('return_periods')
  }
}

module.exports = ReturnPeriodsSchema
