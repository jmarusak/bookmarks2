const express = require('express')
const router = express.Router()
const linksController = require('../controllers/links.controller')

// GET /api/links - Get all links
router.get('/', linksController.getAllLinks)

module.exports = router
