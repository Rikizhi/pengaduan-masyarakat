import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Masyarakat = db.define(
  "masyarakat",
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

// menerapkan perubahan ke dalam database
(async () => {
  await db.sync();
})();
