import express from "express";
import { createMasyarakat, deleteMasyarakat, getMasyarakat, getMasyarakatById, updateMasyarakat } from "../controllers/masyarakat.js";

const router = express.Router();
router.get("/get-all-masyarakat", getMasyarakat);
router.get("/get-masyarakat/:id", getMasyarakatById);
router.post("/insert-masyarakat", createMasyarakat);
router.patch("/update-masyarakat/:id", updateMasyarakat);
router.delete("/delete-masyarakat/:id", deleteMasyarakat);

export default router;
