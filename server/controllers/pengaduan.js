import Pengaduan from "../models/Pengaduan.js";

export const getPengaduan = async (req, res) => {
  try {
    const response = await Pengaduan.findAll();
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};
