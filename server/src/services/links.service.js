// Placeholder data for links
const mockLinks = [
  {
    link_id: '2025-04-05T00:57:21.752Z',
    url: 'https://refactoring.guru/',
    image: 'https://refactoring.guru/images/content-public/logos/logo-new.png',
    title: 'Refactoring Guru',
    category: 'recipe',
    description: 'Refactoring and Design Patterns in multiple languages.',
    createdAt: new Date()  
  },
  {
    link_id: '2025-04-05T00:54:40.842Z',
    url: 'https://github.com/PacktPublishing/Generative-AI-on-Google-Cloud-with-LangChain',
    image: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    title: 'Generative AI on Google Cloud with LangChain',
    category: 'github',
    description: 'Book repository, sample of NL2SQL',
    createdAt: new Date()
  }
]

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
      link_id: doc.id,
      ...data,
      createdAt: data.createdAt?.toDate() || data.createdAt
    });
  });

  return links;
}

getAllLinks().then(console.log("Done"));

module.exports = {
  getAllLinks
}
