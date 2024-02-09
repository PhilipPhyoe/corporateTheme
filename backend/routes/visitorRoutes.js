import express from "express";
import { createInquiry } from "../controllers/visitorController.js";

const router = express.Router();

//router.route("/").get(getAllVisitors);
router.route("/").post(createInquiry);

export default router;
