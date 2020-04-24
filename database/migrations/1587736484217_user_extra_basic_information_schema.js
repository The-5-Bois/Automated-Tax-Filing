'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserExtraBasicInformationSchema extends Schema {
  up () {
    this.create('user_extra_basic_informations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_extra_basic_informations')
  }
}

module.exports = UserExtraBasicInformationSchema
