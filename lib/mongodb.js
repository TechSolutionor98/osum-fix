import { MongoClient } from 'mongodb';

// Uses MONGODB_URI and optional MONGODB_DB

let cachedClient = global._mongoClient;
let cachedDb = global._mongoDb;

if (!cachedClient) {
  cachedClient = null;
  cachedDb = null;
  global._mongoClient = cachedClient;
  global._mongoDb = cachedDb;
}

export async function getDb() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || 'osumfix';

  if (cachedDb) return cachedDb;
  if (!uri) throw new Error('MONGODB_URI environment variable is not set');
  if (!cachedClient) {
    const client = new MongoClient(uri);
    await client.connect();
    cachedClient = client;
    global._mongoClient = client;
  }
  const db = cachedClient.db(dbName);
  cachedDb = db;
  global._mongoDb = db;
  return db;
}

export async function closeConnection() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
    global._mongoClient = null;
    global._mongoDb = null;
  }
}
