'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Role = use('App/Models/Role')

class RoleSeeder {
  async run () {
	  const role1 = new Role()
	  role1.title = 'Administrator'
      role1.slug = 'admin'
      await role1.save()
	  
	  const role2 = new Role()
	  role2.title = 'Taxpayer'
      role2.slug = 'taxpayer'
      await role2.save()
  }
}

module.exports = RoleSeeder
