'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaxTypeSchema extends Schema {
  up () {
    this.create('tax_types', (table) => {
      table.increments()
      table.string('title', 254)
      table.string('slug', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('tax_types')
  }
}

module.exports = TaxTypeSchema
