import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

// Middleware to parse JSON request bodies
app.use(express.json())

// Configure CORS
app.use(
  cors({
    origin: 'https://nonmash.pages.dev', // Allowed front-end address
    methods: ['GET', 'POST', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type'], // Allowed request headers
    credentials: true // Enable if you need to send cookies
  })
)

// Manually handle preflight (OPTIONS) requests if needed
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://nonmash.pages.dev')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.sendStatus(200) // Send an OK response for preflight requests
})

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Node.js!')
})

// Route to handle adding a book
app.post('/addbook', (req, res) => {
  const { isbn, name } = req.body

  // Basic validation (ensure data is present)
  if (!isbn || !name) {
    return res.status(400).json({ message: 'ISBN and name are required.' })
  }

  // Handle the book addition logic here (e.g., save to a database)
  // Simulating a successful response
  res.status(201).json({ message: 'Book added successfully!', book: { isbn, name } })
})

// Logging middleware (optional)
app.use((req, res, next) => {
  console.log('Request:', req.method, req.url)
  next()
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
