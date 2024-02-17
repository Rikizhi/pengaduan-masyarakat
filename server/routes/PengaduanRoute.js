import express from "express";
import { createPengaduan, deletePengaduan, getPengaduan, getPengaduanById, updatePengaduan } from "../controllers/pengaduan.js";

const router = express.Router();
router.get("/get-all-pengaduan", getPengaduan);
router.get("/get-pengaduan/:id", getPengaduanById);
router.post("/insert-pengaduan", createPengaduan);
router.patch("/update-pengaduan/:id", updatePengaduan);
router.delete("/delete-pengaduan/:id", deletePengaduan);

export default router;
