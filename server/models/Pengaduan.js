import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataType } = Sequelize;

const Pengaduan = db.define("pengaduan", {
  id_tanggapan: {
    type: DataType.INT,
    primaryKey: true,
    autoIncrement: true,
  },
  tgl_pengaduan: {
    type: DataType.DATE,
  },
  nik: {
    type: DataType.VARCHAR,
    references: {
      model: Masyarakat,
      key: "nik",
    },
  },
  isi_laporan: {
    type: DataType.TEXT,
  },
  foto: {
    type: DataType.VARCHAR(255),
  },
});
