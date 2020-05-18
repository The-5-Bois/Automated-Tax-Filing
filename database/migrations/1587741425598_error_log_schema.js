'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ErrorLogSchema extends Schema {
  up () {
    this.create('error_logs', (table) => {
      table.increments()
      table.string('sr_no', 50)
      table.string('section_name', 50)
      table.string('field', 50)
      table.text('error_description')
      table.string('reference_call', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('error_logs')
  }
}

module.exports = ErrorLogSchema
