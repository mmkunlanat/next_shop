import mongoose from "mongoose";

const MONGO = process.env.MONGO_URI || "";

if (!MONGO) throw new Error("Please provide MONGO_URI in .env");

let cached = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
