'use strict'

/*
|--------------------------------------------------------------------------
| ExtraBasicInformationSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const ExtraBasicInformation = use('App/Models/ExtraBasicInformation')

class ExtraBasicInformationSeeder {
  async run () {
	  const extra1 = new ExtraBasicInformation()
	  extra1.title = 'admin'
      extra1.slug = 'admin'
      await extra1.save()	  
	  
	  const extra2 = new ExtraBasicInformation()
	  extra2.title = 'admin'
      extra2.slug = 'admin'
      await extra2.save()  
	  
	  const extra3 = new ExtraBasicInformation()
	  extra3.title = 'admin'
      extra3.slug = 'admin'
      await extra3.save()  
	  
	  const extra4 = new ExtraBasicInformation()
	  extra4.title = 'admin'
      extra4.slug = 'admin'
      await extra4.save()  
	  
	  const extra5 = new ExtraBasicInformation()
	  extra5.title = 'admin'
      extra5.slug = 'admin'
      await extra5.save()  
	  
	  const extra6 = new ExtraBasicInformation()
	  extra6.title = 'admin'
      extra6.slug = 'admin'
      await extra6.save()  
	  
	  const extra7 = new ExtraBasicInformation()
	  extra7.title = 'admin'
      extra7.slug = 'admin'
      await extra7.save()  
	  
	  const extra8 = new ExtraBasicInformation()
	  extra8.title = 'admin'
      extra8.slug = 'admin'
      await extra8.save()  
	  
	  const extra9 = new ExtraBasicInformation()
	  extra9.title = 'admin'
      extra9.slug = 'admin'
      await extra9.save()  
	  
	  const extra10 = new ExtraBasicInformation()
	  extra10.title = 'admin'
      extra10.slug = 'admin'
      await extra10.save()  
	  
	  const extra11 = new ExtraBasicInformation()
	  extra11.title = 'admin'
      extra11.slug = 'admin'
      await extra11.save()
  }
}

module.exports = ExtraBasicInformationSeeder
