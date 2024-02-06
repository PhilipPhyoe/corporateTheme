import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import mysql from "mysql";

//routes
import visitorRoutes from "../backend/routes/visitorRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
//connectDB();
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

const port = 5000 || process.env.PORT;
app.get("/", (req, res) => {
  let sql = "SELECT * FROM inquiries";
  dataBase.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
