'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserExtraBasicInformationSchema extends Schema {
  up () {
    this.create('user_extra_basic_informations', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
	    table.integer('extra_basic_information_id').unsigned().references('id').inTable('extra_basic_informations')
      table.integer('return_period_id').unsigned().references('id').inTable('return_periods')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_extra_basic_informations')
  }
}

module.exports = UserExtraBasicInformationSchema
