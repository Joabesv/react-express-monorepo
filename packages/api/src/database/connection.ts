import { MongoClient } from 'mongodb';
import { DATABASE_NAME, MONGODB_URI } from '../config/config';
// doing this to cache the mongodb connection

let connectedClient: MongoClient | null = null;
export const connection = async () => {
  const client = new MongoClient(MONGODB_URI);
  try {
    if (connectedClient) connectedClient.db(DATABASE_NAME);

    await client.connect();
    await client.db(DATABASE_NAME).command({ ping: 1 });
    console.info('connected to db');

    connectedClient = client;

    return connectedClient.db(DATABASE_NAME);
  } catch (err) {
    await connectedClient?.close();
    throw new Error('deu ruim na connection', { cause: err });
  }
};
