import mongoose from "mongoose";

const { MONGO_URI = "" } = process.env;

export const connectDB = async () => {
  const connection = await mongoose.connect(MONGO_URI, {
    dbName: "automation-frontend",
  });

  return async () => {
    await connection.disconnect();
  };
};
