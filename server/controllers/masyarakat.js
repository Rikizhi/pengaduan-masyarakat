import Masyarakat from "../models/Masyarakat.js";

export const getMasyarakat = async (req, res) => {
  try {
    const response = await Masyarakat.findAll();
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};
