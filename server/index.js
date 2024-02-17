// import dependencies
import express from "express";
import cors from "cors";
import MasyarakatRoute from "./routes/MasyarakatRoute.js";
import PetugasRoute from "./routes/PetugasRoute.js";
import PengaduanRoute from "./routes/PengaduanRoute.js";
import TanggapanRoute from "./routes/TanggapanRoute.js";

// variabel
const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(MasyarakatRoute);
app.use(PetugasRoute);
app.use(PengaduanRoute);
app.use(TanggapanRoute);

// port
app.listen(5000, () => console.log("Server is running from port..."));
