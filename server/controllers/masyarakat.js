import Masyarakat from "../models/Masyarakat.js";

export const getMasyarakat = async (req, res) => {
  try {
    const response = await Masyarakat.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error("Error retrieving Masyarakat data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMasyarakatById = async (req, res) => {
  try {
    const response = await Masyarakat.findOne({
      where: {
        nik: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error("Error retrieving Masyarakat data by ID:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createMasyarakat = async (req, res) => {
  try {
    await Masyarakat.create(req.body);
    res.status(201).json({ msg: "Masyarakat dibuat" });
  } catch (error) {
    console.error("Error creating Masyarakat:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateMasyarakat = async (req, res) => {
  try {
    await Masyarakat.update(req.body, {
      where: {
        nik: req.params.id,
      },
    });
    res.status(200).json({ msg: "Masyarakat diupdate" });
  } catch (error) {
    console.error("Error updating Masyarakat data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteMasyarakat = async (req, res) => {
  try {
    await Masyarakat.destroy({
      where: {
        nik: req.params.id,
      },
    });
    res.status(200).json({ msg: "Masyarakat dihapus" });
  } catch (error) {
    console.error("Error deleting Masyarakat data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
