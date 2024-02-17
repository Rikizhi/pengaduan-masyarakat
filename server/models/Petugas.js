import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Petugas = db.define(
  "petugas",
  {
    id_petugas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_petugas: {
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
    level: {
      type: DataTypes.ENUM("admin", "petugas"),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Petugas;

// menerapkan perubahan ke dalam database
(async () => {
  await db.sync();
})();
