'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessionEmployerSchema extends Schema {
  up () {
    this.create('profession_employers', (table) => {
      table.increments()
	    table.integer('profession_id').unsigned().references('id').inTable('professions')
	    table.integer('employer_detail_id').unsigned().references('id').inTable('employer_details')
      table.timestamps()
    })
  }

  down () {
    this.drop('profession_employers')
  }
}

module.exports = ProfessionEmployerSchema
