import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
//import mysql from "mysql";

//routes
import visitorRoutes from "../backend/routes/visitorRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const port = process.env.PORT || 5000;
app.get("/", visitorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
