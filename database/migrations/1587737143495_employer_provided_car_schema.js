'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployerProvidedCarSchema extends Schema {
  up () {
    this.create('employer_provided_cars', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('employer_provided_cars')
  }
}

module.exports = EmployerProvidedCarSchema
