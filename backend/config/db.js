import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    console.log("Database is connected.");
  } catch (error) {
    console.error(`Error message: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
