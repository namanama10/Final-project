'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      type_kendaraan: {
        type: Sequelize.STRING
      },
      type_transmisi: {
        type: Sequelize.STRING
      },
      warna: {
        type: Sequelize.STRING
      },
      kapasitas_kendaraan: {
        type: Sequelize.STRING
      },
      gambar: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      brandId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};