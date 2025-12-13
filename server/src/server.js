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
  res.send('Hello World!')
})

app.use('/api/links', linksRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
