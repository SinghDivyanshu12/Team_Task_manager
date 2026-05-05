const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Project = sequelize.define("Project", {
  name: { type: DataTypes.STRING, allowNull: false },
  members: { type: DataTypes.JSON, defaultValue: [] },
});

module.exports = Project;