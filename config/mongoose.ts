import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://test:test@cluster0.b5lzcl9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionString);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default db;
