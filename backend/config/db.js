import mysql from "mysql";
import dotenv from "dotenv";

//dotenv.config();
const connectDB = async () => {
  try {
    var dataBase = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "hector",
    });
    dataBase.connect((error) => {
      if (error) throw error;
      console.log("Database is connected.");
    });
  } catch (error) {
    console.error(`Error message: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
