import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pengaduan from "./Pengaduan.js";
import Petugas from "./Petugas.js";

const { DataTypes } = Sequelize;

const Tanggapan = db.define(
  "tanggapan",
  {
    id_tanggapan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_pengaduan: {
      type: DataTypes.INTEGER,
      references: {
        model: Pengaduan,
        key: "id_pengaduan",
      },
    },
    tgl_tanggapan: {
      type: DataTypes.DATEONLY,
    },
    tanggapan: {
      type: DataTypes.TEXT,
    },
    id_petugas: {
      type: DataTypes.INTEGER,
      references: {
        model: Petugas,
        key: "id_petugas",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Tanggapan;

// menerapkan perubahan ke dalam database
(async () => {
  await db.sync();
})();
