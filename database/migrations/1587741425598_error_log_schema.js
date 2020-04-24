'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ErrorLogSchema extends Schema {
  up () {
    this.create('error_logs', (table) => {
      table.increments()
      table.string('code', 50)
      table.string('title', 50)
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('error_logs')
  }
}

module.exports = ErrorLogSchema
