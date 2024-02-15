import express from "express";
import { getMasyarakats } from "../controllers/masyarakat.js";

const router = express.Router();
router.get("/masyarakats", getMasyarakats);

export default router;
