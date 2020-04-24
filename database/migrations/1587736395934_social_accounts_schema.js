'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SocialAccountsSchema extends Schema {
  up () {
    this.create('social_accounts', (table) => {
      table.increments()
	    table.integer('user_id').unsigned().unique().references('id').inTable('users')
      table.string('provider', 254).unique()
      table.string('provider_user_id', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('social_accounts')
  }
}

module.exports = SocialAccountsSchema
