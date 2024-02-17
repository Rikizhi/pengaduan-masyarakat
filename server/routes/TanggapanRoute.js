import express from "express";
import { createTanggapan, deleteTanggapan, getTanggapan, getTanggapanById, updateTanggapan } from "../controllers/tanggapan.js";

const router = express.Router();
router.get("/get-all-tanggapan", getTanggapan);
router.get("/get-tanggapan/:id", getTanggapanById);
router.post("/insert-tanggapan", createTanggapan);
router.patch("/update-tanggapan/:id", updateTanggapan);
router.delete("/delete-tanggapan/:id", deleteTanggapan);

export default router;
