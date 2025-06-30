import mongoose from "mongoose";

async function connectToDatabase() {
  const url = process.env.DATABASE_CONNECTION;

  try {
    await mongoose.connect(url);
    console.log("Database has been connected");
  } catch (error) {
    console.log("database error: " + error);
  }
}

export { connectToDatabase };
