import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    // console.log(`Conneted To Mongodb Database`);
  } catch (error) {
    // console.log(`Error in Mongodb ${error}`);
  }
};

export default connectDB;
