// import dependencies
import express from "express";
import cors from "cors";
import MasyarakatRoute from "./routes/MasyarakatRoute.js";
import PetugasRoute from "./routes/PetugasRoute.js";
import PengaduanRoute from "./routes/PengaduanRoute.js";
import TanggapanRoute from "./routes/TanggapanRoute.js";

// variabel
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use('/masyarakat', MasyarakatRoute);
app.use('/petugas',PetugasRoute);
app.use('/pengaduan',PengaduanRoute);
app.use('/tanggapan',TanggapanRoute);
app.get("/", (req, res) => res.json({ message: "Welcome to our API" }));
app.use((req, res) => res.status(404).json({ success: false, message: "Not Found" }));

// listen to the port
app.listen(5000, () => console.log(`Server is running from port ${PORT}`));
