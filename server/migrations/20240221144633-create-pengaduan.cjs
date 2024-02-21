"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pengaduan", {
      id_pengaduan: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tgl_pengaduan: {
        type: Sequelize.DATEONLY,
      },
      nik: {
        type: Sequelize.CHAR(16),
        references: {
          model: "Masyarakat",
          key: "nik",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      isi_laporan: {
        type: Sequelize.TEXT,
      },
      foto: {
        type: Sequelize.STRING(255),
      },
      status: {
        type: Sequelize.ENUM("0", "proses", "selesai"),
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pengaduan");
  },
};
