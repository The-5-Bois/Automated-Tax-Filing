'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExceptionCertificateForDisabilitySchema extends Schema {
  up () {
    this.create('exception_certificate_for_disabilities', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('exception_certificate_for_disabilities')
  }
}

module.exports = ExceptionCertificateForDisabilitySchema
