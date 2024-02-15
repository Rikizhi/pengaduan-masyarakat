import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Masyarakat = db.define(
  "masyarakats",
  {
    nik: {
      type: DataTypes.CHAR(16),
      primaryKey: true,
    },
    nama: {
      type: DataTypes.STRING(35),
    },
    username: {
      type: DataTypes.STRING(25),
    },
    password: {
      type: DataTypes.STRING(32),
    },
    telp: {
      type: DataTypes.STRING(13),
    },
  },
  {
    freezeTableName: true,
  }
);

export default Masyarakat;

// akan generate tabel, jika tabel tidak ada di dalam database
(async () => {
  await db.sync();
})();
