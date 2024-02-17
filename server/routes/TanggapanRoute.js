import express from "express";
import { getTanggapan } from "../controllers/tanggapan.js";

const router = express.Router();
router.get("/tanggapan", getTanggapan);

export default router;
