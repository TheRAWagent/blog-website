import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.DB_URL || "mongodb://localhost:27017/blog";

const connectDB = async () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions)
        .then(() => {
            console.log("MongoDB connected");
        }).catch((err) => {
            console.log(err);
        }
        )
};

export default connectDB;