import express from "express";
import { getAllVisitors } from "../controllers/visitorController.js";

const router = express.Router();

router.route("/").get(getAllVisitors);

export default router;
