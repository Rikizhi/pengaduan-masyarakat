import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Petugas = db.define(
  "petugas",
  {
    id_petugas: {
      type: DataTypes.INT(11),
      primaryKey: true,
    },
    nama_petugas: {
      type: DataTypes.VARCHAR(35),
    },
    username: {
      type: DataTypes.VARCHAR(25),
    },
    password: {
      type: DataTypes.VARCHAR(32),
    },
    telp: {
      type: DataTypes.VARCHAR(13),
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
