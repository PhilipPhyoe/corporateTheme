import express from "express";
import { getAllVisitors } from "../controllers/visitorController.js";
import connectDB from "../config/db.js";

const router = express.Router();

router.route("/").get((req, res) => {
  console.log("Get all users.");
  const sql = "SELECT * FROM inquiries";
  connectDB.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

export default router;
