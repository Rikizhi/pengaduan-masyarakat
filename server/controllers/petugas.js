import Petugas from "../models/Petugas.js";

export const getPetugas = async (req, res) => {
  try {
    const response = await Petugas.findAll();
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};

export const getPetugasById = async (req, res) => {
  try {
    const response = await Petugas.findOne({
      where: {
        id_petugas: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};

export const createPetugas = async (req, res) => {
  try {
    await Petugas.create(req.body);
    res.status(201).json({ msg: "Petugas dibuat" });
  } catch {
    console.log(error.message);
  }
};

export const updatePetugas = async (req, res) => {
  try {
    await Petugas.update(req.body, {
      where: {
        id_petugas: req.params.id,
      },
    });
    res.status(200).json({ msg: "Petugas diupdate" });
  } catch {
    console.log(error.message);
  }
};

export const deletePetugas = async (req, res) => {
  try {
    await Petugas.destroy({
      where: {
        id_petugas: req.params.id,
      },
    });
    res.status(200).json({ msg: "Petugas dihapus" });
  } catch {
    console.log(error.message);
  }
};
