import express from "express";
import { getPetugas } from "../controllers/petugas.js";

const router = express.Router();
router.get("/petugas", getPetugas);

export default router;
