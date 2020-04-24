'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompulsoryBasicInformationSchema extends Schema {
  up () {
    this.create('compulsory_basic_informations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('compulsory_basic_informations')
  }
}

module.exports = CompulsoryBasicInformationSchema
