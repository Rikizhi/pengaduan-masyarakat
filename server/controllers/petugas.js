import Petugas from "../models/Petugas.js";

export const getPetugas = async (req, res) => {
  try {
    const response = await Petugas.findAll();
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};
