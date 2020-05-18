'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompulsoryBasicInformationSchema extends Schema {
  up () {
    this.create('compulsory_basic_informations', (table) => {
      table.increments()
	  table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('taxpayer_pin', 254)
      table.string('type_of_return', 254)
      table.string('basic_salary', 254)
      table.string('gross_salary', 254)
      table.string('pension_contribution', 254)
      table.string('paye_charged', 254)
      table.string('personal_relief_entitlement', 254)
      table.string('employer_name', 254)
      table.string('employer_pin', 254)
      table.integer('return_period_id').unsigned().references('id').inTable('return_periods')
      table.timestamps()
    })
  }

  down () {
    this.drop('compulsory_basic_informations')
  }
}

module.exports = CompulsoryBasicInformationSchema
