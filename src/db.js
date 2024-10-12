import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mern");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
