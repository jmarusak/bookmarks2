const express = require('express')
const router = express.Router()
const linksController = require('../controllers/links.controller')

// GET /api/links - Get all links
router.get('/', linksController.getAllLinks)

// DELETE /api/links/:id - Delete a link by ID
router.delete('/:id', linksController.deleteLink)

module.exports = router
