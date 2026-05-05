const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Task = sequelize.define("Task", {
  title: { type: DataTypes.STRING, allowNull: false },
  status: {
    type: DataTypes.ENUM("Pending", "In Progress", "Done"),
    defaultValue: "Pending",
  },
  assignedTo: { type: DataTypes.INTEGER },
  deadline: { type: DataTypes.DATE },
});

module.exports = Task;