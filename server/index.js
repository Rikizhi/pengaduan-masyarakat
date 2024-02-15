// import dependencies
import express from "express";
import cors from "cors";
import MasyarakatRoute from "./routes/MasyarakatRoute.js";

// variabel
const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(MasyarakatRoute);

// port
app.listen(5000, () => console.log("Server is running from port..."));
