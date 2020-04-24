'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployerDetailSchema extends Schema {
  up () {
    this.create('employer_details', (table) => {
      table.increments()
      table.string('name', 254)
      table.string('pin', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('employer_details')
  }
}

module.exports = EmployerDetailSchema
