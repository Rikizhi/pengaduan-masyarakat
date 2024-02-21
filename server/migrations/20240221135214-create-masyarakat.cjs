"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Masyarakat", {
      nik: {
        type: Sequelize.CHAR(16),
        primaryKey: true,
      },
      nama: {
        type: Sequelize.STRING(35),
      },
      username: {
        type: Sequelize.STRING(25),
      },
      password: {
        type: Sequelize.STRING(32),
      },
      telp: {
        type: Sequelize.STRING(13),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Masyarakat");
  },
};
