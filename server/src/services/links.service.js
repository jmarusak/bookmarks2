const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: process.env.FIREBASE_PROJECT_ID,
  databaseId: process.env.FIREBASE_DATABASE_ID
});

/**
 * Get all links
 * @returns {Promise<Array>} Array of link objects
 */
async function getAllLinks() {
  const snapshot = await db.collection('links').get();
  const links = [];

  snapshot.forEach((doc) => {
    const data = doc.data();
    links.push({
      id: doc.id,
      ...data
    });
  });

  return links;
}

/**
 * Delete a link by ID
 * @param {string} id - The document ID of the link to delete
 * @returns {Promise<void>}
 */
async function deleteLink(id) {
  await db.collection('links').doc(id).delete();
}

module.exports = {
  getAllLinks,
  deleteLink
}
