const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

// Import routes
const linksRoutes = require('./routes/links.routes')

// Middleware
app.use(cors())
app.use(express.json())

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, '../static')))

// API Routes
app.use('/api/links', linksRoutes)

// Handle React routing - return index.html for all other routes
// This must come AFTER API routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'))
})

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
