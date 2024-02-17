import express from "express";
import { createPetugas, deletePetugas, getPetugas, getPetugasById, updatePetugas } from "../controllers/petugas.js";

const router = express.Router();
router.get("/get-all-petugas", getPetugas);
router.get("/get-petugas/:id", getPetugasById);
router.post("/insert-petugas", createPetugas);
router.patch("/update-petugas/:id", updatePetugas);
router.delete("/delete-petugas/:id", deletePetugas);

export default router;
