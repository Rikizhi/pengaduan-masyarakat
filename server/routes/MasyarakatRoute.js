import express from "express";
import { getMasyarakat } from "../controllers/masyarakat.js";

const router = express.Router();
router.get("/masyarakat", getMasyarakat);

export default router;
