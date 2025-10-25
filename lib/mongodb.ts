import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.warn('MONGODB_URI is not set. Database writes will fail.');
}

let cachedClient: MongoClient | null = null;

export async function getMongoClient() {
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable.');
  }

  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = new MongoClient(uri);
  await cachedClient.connect();
  return cachedClient;
}
