const linksService = require('../services/links.service')

/**
 * Get all links
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function getAllLinks(req, res) {
  try {
    const links = await linksService.getAllLinks()
    res.json({
      success: true,
      data: links
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve links'
    })
  }
}

/**
 * Create a new link
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function createLink(req, res) {
  try {
    const linkData = req.body
    const newLink = await linksService.createLink(linkData)
    res.status(201).json({
      success: true,
      data: newLink
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create link'
    })
  }
}

/**
 * Delete a link by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function deleteLink(req, res) {
  try {
    const { id } = req.params
    await linksService.deleteLink(id)
    res.json({
      success: true,
      message: 'Link deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete link'
    })
  }
}

module.exports = {
  getAllLinks,
  createLink,
  deleteLink
}
