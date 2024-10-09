import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS
app.use(
  cors({
    origin: 'https://nonmash.pages.dev', // Allowed front-end address
    methods: ['GET', 'POST', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type'], // Allowed request headers
    credentials: true // Enable if you need to send cookies
  })
);

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

// Logging middleware (optional)
app.use((req, res, next) => {
  console.log('CORS headers set for:', req.method, req.url);
  next();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
