import Tanggapan from "../models/Tanggapan.js";

export const getTanggapan = async (req, res) => {
  try {
    const response = await Tanggapan.findAll();
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};
