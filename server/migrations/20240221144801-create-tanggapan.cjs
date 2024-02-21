"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tanggapan", {
      id_tanggapan: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      id_pengaduan: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pengaduan",
          key: "id_pengaduan",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tgl_tanggapan: {
        type: Sequelize.DATEONLY,
      },
      tanggapan: {
        type: Sequelize.TEXT,
      },
      id_petugas: {
        type: Sequelize.INTEGER,
        references: {
          model: "Petugas",
          key: "id_petugas",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("Tanggapan");
  },
};
