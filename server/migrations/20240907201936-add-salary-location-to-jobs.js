"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("jobs", "salary", {
      type: DataTypes.FLOAT, // Используйте FLOAT для числовых значений
      allowNull: false,
    });
    await queryInterface.addColumn("jobs", "location", {
      type: DataTypes.STRING, // Используйте STRING для текстовых значений
      allowNull: false,
    });

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("jobs", "salary");
    await queryInterface.removeColumn("jobs", "location");

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
