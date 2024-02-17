import Masyarakat from "../models/Masyarakat.js";

export const getMasyarakat = async (req, res) => {
  try {
    const response = await Masyarakat.findAll();
    res.status(200).json(response);
  } catch {
    console.log(error.message);
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
  } catch {
    console.log(error.message);
  }
};

export const createMasyarakat = async (req, res) => {
  try {
    await Masyarakat.create(req.body);
    res.status(201).json({ msg: "Masyarakat dibuat" });
  } catch {
    console.log(error.message);
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
  } catch {
    console.log(error.message);
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
  } catch {
    console.log(error.message);
  }
};
