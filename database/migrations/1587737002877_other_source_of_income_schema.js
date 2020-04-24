'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OtherSourceOfIncomeSchema extends Schema {
  up () {
    this.create('other_source_of_incomes', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('b_profit_loss_account_self', 254)
      table.string('c_balance_sheet', 254)
      table.string('d_stock_analysis', 254)
      table.string('e1_ida_ca', 254)
      table.string('e2_ca_wta_wdv', 254)
      table.string('e2_ca_wta_slm', 254)
      table.string('e_summary_of_captal_allowance', 254)
      table.string('f_employment_income', 254)
      table.string('m_details_of_paye_deducted', 254)
      table.string('n_installmenty_tax_credits', 254)
      table.string('o_wht_credits', 254)
      table.string('q_it_payment_credits', 254)
      table.string('s_previous_years_loses', 254)
      table.string('t_income_computation_self', 254)
      table.string('t_tax_computation', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('other_source_of_incomes')
  }
}

module.exports = OtherSourceOfIncomeSchema
