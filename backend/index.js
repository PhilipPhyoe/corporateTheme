import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
connectDB();

const port = 5000 || process.env.PORT;
app.get("/", (req, res) => res.send("Up and running!"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
