'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LifeInsurancePolicySchema extends Schema {
  up () {
    this.create('life_insurance_policies', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('i_computation_of_insu_relief', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('life_insurance_policies')
  }
}

module.exports = LifeInsurancePolicySchema
