const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.set("strictQuery", false).connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`MongoDB connection erorr: ${error.message}`);

    process.exit(1);
  }
};

module.exports = connectMongoDB;
