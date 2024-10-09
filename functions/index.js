// eslint-disable-next-line no-undef
const { onRequest } = require('firebase-functions/v2/https')
// eslint-disable-next-line no-undef
const admin = require('firebase-admin')
// eslint-disable-next-line no-undef
const cors = require('cors')({ origin: true })

admin.initializeApp()

// Function to count the total number of books in the Firestore collection
// eslint-disable-next-line no-undef
exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection('books') // Make sure collection name is consistent
      const snapshot = await booksCollection.get()
      const count = snapshot.size

      // Send the total count of books
      res.status(200).send({ count })
    } catch (error) {
      // Log the error and send a 500 status response
      console.error('Error counting books:', error.message)
      res.status(500).send('Error counting books')
    }
  })
})

// eslint-disable-next-line no-undef
const sgMail = require('@sendgrid/mail')

// eslint-disable-next-line no-undef
sgMail.setApiKey(functions.config().sendgrid.api_key)
const msg = {
  to: email, // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })