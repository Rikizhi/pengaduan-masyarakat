import Pengaduan from "../models/Pengaduan.js";

export const getPengaduan = async (req, res) => {
  try {
    const response = await Pengaduan.findAll();
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};

export const getPengaduanById = async (req, res) => {
  try {
    const response = await Pengaduan.findOne({
      where: {
        id_pengaduan: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};

export const createPengaduan = async (req, res) => {
  try {
    await Pengaduan.create(req.body);
    res.status(201).json({ msg: "Pengaduan dibuat" });
  } catch {
    console.log(error.message);
  }
};

export const updatePengaduan = async (req, res) => {
  try {
    await Pengaduan.update(req.body, {
      where: {
        id_pengaduan: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pengaduan diupdate" });
  } catch {
    console.log(error.message);
  }
};

export const deletePengaduan = async (req, res) => {
  try {
    await Pengaduan.destroy({
      where: {
        id_pengaduan: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pengaduan dihapus" });
  } catch {
    console.log(error.message);
  }
};
