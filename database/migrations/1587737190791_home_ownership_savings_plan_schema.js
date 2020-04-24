'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HomeOwnershipSavingsPlanSchema extends Schema {
  up () {
    this.create('home_ownership_savings_plans', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('k_home_ownership_saving_plan', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('home_ownership_savings_plans')
  }
}

module.exports = HomeOwnershipSavingsPlanSchema
