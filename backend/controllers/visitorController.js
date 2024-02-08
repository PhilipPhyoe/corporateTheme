import mysql from "mysql";
import connectDB from "../config/db.js";

const getAllVisitors = async (req, res) => {
  let visitors = "SELECT * FROM inquiries";
  try {
    visitors,
      (error, results, fields) => {
        if (error) throw error;
        res.send("data is sent.");
      };
  } catch (error) {
    console.error(`Error message: ${error.message}`);
  }
};

export { getAllVisitors };
