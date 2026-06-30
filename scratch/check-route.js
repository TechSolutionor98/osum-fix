const { MongoClient, ObjectId } = require('mongodb');

async function main() {
  const client = new MongoClient('mongodb+srv://admin:admin@cluster0.ac1fznk.mongodb.net');
  try {
    await client.connect();
    const db = client.db('voltariadb');
    
    const route = await db.collection('cms_routes').findOne({ _id: new ObjectId('6a2b9f0db209cb811a56992f') });
    console.log('Route 6a2b9f0db209cb811a56992f:', route);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
