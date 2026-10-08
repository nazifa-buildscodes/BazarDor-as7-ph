import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Missing MONGODB_URI in .env.local");
const globalForMongo = globalThis as unknown as { mongoClient?: MongoClient; mongoPromise?: Promise<MongoClient> };
export const mongoClient = globalForMongo.mongoClient ?? new MongoClient(uri);
if (process.env.NODE_ENV !== "production") globalForMongo.mongoClient = mongoClient;
export const mongoClientPromise = globalForMongo.mongoPromise ?? mongoClient.connect();
if (process.env.NODE_ENV !== "production") globalForMongo.mongoPromise = mongoClientPromise;
export async function getMongoDb() { return (await mongoClientPromise).db(process.env.MONGODB_DB || "bazardoor"); }
