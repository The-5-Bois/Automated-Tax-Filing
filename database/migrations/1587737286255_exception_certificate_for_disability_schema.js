'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExceptionCertificateForDisabilitySchema extends Schema {
  up () {
    this.create('exception_certificate_for_disabilities', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
      table.boolean('issued').defaultTo(false)
      table.integer('return_period_id').unsigned().references('id').inTable('return_periods')
      table.timestamps()
    })
  }

  down () {
    this.drop('exception_certificate_for_disabilities')
  }
}

module.exports = ExceptionCertificateForDisabilitySchema
