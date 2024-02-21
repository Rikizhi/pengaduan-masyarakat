"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Pengaduan", [
      {
        tgl_pengaduan: new Date(),
        nik: "3274402710050004",
        isi_laporan: "Laporan Pengaduan",
        foto: "bukti.jpg",
        status: "proses",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Pengaduan", null, {});
  },
};
