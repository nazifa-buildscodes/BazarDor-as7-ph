import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI in .env.local");
}

const globalForMongo = globalThis as unknown as {
  mongoClient?: MongoClient;
  mongoClientPromise?: Promise<MongoClient>;
};

const client =
  globalForMongo.mongoClient ??
  new MongoClient(uri, {
    tls: true,
    family: 4,
    serverSelectionTimeoutMS: 15000,
    connectTimeoutMS: 15000,
  });

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

const clientPromise =
  globalForMongo.mongoClientPromise ?? client.connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClientPromise = clientPromise;
}

export const mongoClient = client;
export const mongoClientPromise = clientPromise;

export async function getMongoDb() {
  const connectedClient = await mongoClientPromise;

  return connectedClient.db(
    process.env.MONGODB_DB || "bazardoor"
  );
}