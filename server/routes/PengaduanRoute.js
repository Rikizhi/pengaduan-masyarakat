import express from "express";
import { getPengaduan } from "../controllers/pengaduan.js";

const router = express.Router();
router.get("/pengaduan", getPengaduan);

export default router;
