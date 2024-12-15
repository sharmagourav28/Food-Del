import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionIns = await mongoose.connect(process.env.DB_URL);
    console.log(`DB Connected at ${connectionIns.connection.host}`);
  } catch (error) {
    console.log("MongoDb error", error);
    process.exit(1);
  }
};
export default connectDB;
