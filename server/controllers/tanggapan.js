import Tanggapan from "../models/Tanggapan.js";

export const getTanggapan = async (req, res) => {
  try {
    const response = await Tanggapan.findAll();
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};

export const getTanggapanById = async (req, res) => {
  try {
    const response = await Tanggapan.findOne({
      where: {
        id_tanggapan: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};

export const createTanggapan = async (req, res) => {
  try {
    await Tanggapan.create(req.body);
    res.status(201).json({ msg: "Tanggapan dibuat" });
  } catch {
    console.log(error.message);
  }
};

export const updateTanggapan = async (req, res) => {
  try {
    await Tanggapan.update(req.body, {
      where: {
        id_tanggapan: req.params.id,
      },
    });
    res.status(200).json({ msg: "Tanggapan diupdate" });
  } catch {
    console.log(error.message);
  }
};

export const deleteTanggapan = async (req, res) => {
  try {
    await Tanggapan.destroy({
      where: {
        id_tanggapan: req.params.id,
      },
    });
    res.status(200).json({ msg: "Tanggapan diupdate" });
  } catch {
    console.log(error.message);
  }
};
