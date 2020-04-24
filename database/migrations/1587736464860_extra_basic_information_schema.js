'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExtraBasicInformationSchema extends Schema {
  up () {
    this.create('extra_basic_informations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('extra_basic_informations')
  }
}

module.exports = ExtraBasicInformationSchema
