import mongoose from "mongoose";

const connectionString =
  "<Your MongoDB Atlas Connection String>";

mongoose.connect(connectionString);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default db;
