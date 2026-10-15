import mongoose from "mongoose";

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};

export default ConnectDb;