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
	  extra1.title = 'Do you have any other income other than employment income?'
      extra1.slug = 'admin'
      await extra1.save()	  
	  
	  const extra2 = new ExtraBasicInformation()
	  extra2.title = 'Do you have partnership income?'
      extra2.slug = 'admin'
      await extra2.save()  
	  
	  const extra3 = new ExtraBasicInformation()
	  extra3.title = 'Do you have estate trust income?'
      extra3.slug = 'admin'
      await extra3.save()  
	  
	  const extra4 = new ExtraBasicInformation()
	  extra4.title = 'Has your employer provided you with a car?'
      extra4.slug = 'admin'
      await extra4.save()  
	  
	  const extra5 = new ExtraBasicInformation()
	  extra5.title = 'Do you have a mortgage?'
      extra5.slug = 'admin'
      await extra5.save()  
	  
	  const extra6 = new ExtraBasicInformation()
	  extra6.title = 'Do you  have a home ownership savings plan?'
      extra6.slug = 'admin'
      await extra6.save()  
	  
	  const extra7 = new ExtraBasicInformation()
	  extra7.title = 'Do you have a life insurance policy?'
      extra7.slug = 'admin'
      await extra7.save()  
	  
	  const extra8 = new ExtraBasicInformation()
	  extra8.title = 'Do you have commercial vehicle?'
      extra8.slug = 'admin'
      await extra8.save()  
	  
	  const extra9 = new ExtraBasicInformation()
	  extra9.title = 'Do you have any income from a foreign country?'
      extra9.slug = 'admin'
      await extra9.save()  
	  
	  const extra10 = new ExtraBasicInformation()
	  extra10.title = 'Have you been issued the exception certificate for disability?'
      extra10.slug = 'admin'
      await extra10.save()  
	  
	  const extra11 = new ExtraBasicInformation()
	  extra11.title = 'Do you want to declare wife’s income?'
      extra11.slug = 'admin'
      await extra11.save()
  }
}

module.exports = ExtraBasicInformationSeeder
