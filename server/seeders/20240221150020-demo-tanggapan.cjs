"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Tanggapan", [
      {
        id_tanggapan: 1,
        id_pengaduan: 1,
        tgl_tanggapan: new Date(),
        tanggapan: "Tanggapan sedang diproses, harap tunggu",
        id_petugas: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tanggapan", null, {});
  },
};
