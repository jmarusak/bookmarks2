const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// Import routes
const linksRoutes = require('./routes/links.routes')

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Bookmarks API')
})

app.use('/api/links', linksRoutes)

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
