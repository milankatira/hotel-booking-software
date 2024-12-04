import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hotel';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}
// @ts-expect-error unknown error
let cached = global.mongoose;

if (!cached) {
  // @ts-expect-error unknown error
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;