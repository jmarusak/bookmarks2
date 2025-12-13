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

module.exports = {
  getAllLinks
}
