import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//routes
import visitorRoutes from "../backend/routes/visitorRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); //use cors to prevent limitations
dotenv.config();

const port = process.env.PORT || 5000;
app.use("/api/visitors", visitorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
