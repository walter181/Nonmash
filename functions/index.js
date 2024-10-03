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

// Function to add a new book to the Firestore collection
// eslint-disable-next-line no-undef
exports.addBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      // Destructure isbn and name from the request body
      const { isbn, name } = req.body

      // Check if both isbn and name are provided
      if (!isbn || !name) {
        return res.status(400).send('ISBN and name are required')
      }

      // Add the new book to the Firestore collection
      await admin.firestore().collection('books').add({ isbn: isbn, name: name })

      // Send success response
      res.status(200).send('Book added successfully')
    } catch (error) {
      // Log the error and send a 500 status response
      console.error('Error adding book:', error.message)
      res.status(500).send('Error adding book')
    }
  })
})
