const express = require('express')

// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require & Import API routes
const playersRouter = require('./routers/playersRouter')

// Use API Routes
app.use(playersRouter)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}