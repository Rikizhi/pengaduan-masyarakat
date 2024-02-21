"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Petugas", [
      {
        nama_petugas: "Aimi",
        username: "Aimyon",
        password: "aimyon",
        telp: "08885352665",
        level: "petugas",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Petugas", null, {});
  },
};
