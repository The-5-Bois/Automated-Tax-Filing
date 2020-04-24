'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HomeOwnershipSavingsPlanSchema extends Schema {
  up () {
    this.create('home_ownership_savings_plans', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('home_ownership_savings_plans')
  }
}

module.exports = HomeOwnershipSavingsPlanSchema
