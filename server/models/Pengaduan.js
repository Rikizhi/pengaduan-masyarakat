import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Masyarakat from "./Masyarakat.js";

const { DataTypes } = Sequelize;

const Pengaduan = db.define(
  "pengaduan",
  {
    id_pengaduan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tgl_pengaduan: {
      type: DataTypes.DATEONLY,
    },
    nik: {
      type: DataTypes.CHAR(16),
      references: {
        model: Masyarakat,
        key: "nik",
      },
    },
    isi_laporan: {
      type: DataTypes.TEXT,
    },
    foto: {
      type: DataTypes.STRING(255),
    },
    status: {
      type: DataTypes.ENUM("0", "proses", "selesai"),
    },
  },
  {
    freezeTableName: true,
  }
);

export default Pengaduan;

// menerapkan perubahan ke dalam database
(async () => {
  await db.sync();
})();
