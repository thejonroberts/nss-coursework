'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.STRING
      },
      ShowId: {
        type: Sequelize.STRING
      }
    });

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
