const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Player = sequelize.define("player", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  fname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  dob: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },

  photo: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  birthplace: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  career: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  nom: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  fifties: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  centuries: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  wickets: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  avg: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Player;
