'use strict'

const Mail = use('Mail')

class SendMail {

  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency() {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key() {
    return 'sendmail-job'
  }

  // This is where the work is done.
  * handle(data) {
    yield Mail.send('emails.email', data, (message) => {
      message.to(data.to, data.name)
      message.from(data.from, 'Automated Tax Filing')
      message.subject(data.subject)
    })
  }

}

module.exports = SendMail