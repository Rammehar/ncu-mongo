import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/university");
    console.log("Connected to database");
  } catch (err) {
    console.log(`DB connection Error ${err}`);
  }
};
export { connectDB };
