"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Petugas", {
      id_petugas: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_petugas: {
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
      level: {
        type: Sequelize.ENUM("admin", "petugas"),
        allowNull: false,
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
    await queryInterface.dropTable("Petugas");
  },
};
