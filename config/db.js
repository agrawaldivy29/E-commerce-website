import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.bgBlue.white);
  } catch (error) {
    console.error(`Error in Mongodb: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};

export default connectDB;
