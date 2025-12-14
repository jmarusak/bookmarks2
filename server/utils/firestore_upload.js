const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: process.env.FIREBASE_PROJECT_ID,
  databaseId: process.env.FIREBASE_DATABASE_ID
});

async function uploadData(collectionName, data) {
  const collectionRef = db.collection(collectionName);
  const batch = db.batch();

  data.forEach((item) => {
    const docRef = collectionRef.doc(); // Automatically generate unique ID
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log(`Uploaded ${data.length} documents to ${collectionName} collection.`);
}

function readDataFromFile(filePath) {
  const fs = require('fs');
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

const data = readDataFromFile('links.json');
uploadData('links', data.links).catch(console.error);

