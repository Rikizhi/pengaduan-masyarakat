"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Masyarakat", [
      {
        nik: "3274402710050004",
        nama: "Aria",
        username: "ariamzah",
        password: "aria",
        telp: "0899645322678",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Masyarakat", null, {});
  },
};
