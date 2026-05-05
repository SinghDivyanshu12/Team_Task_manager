const sequelize = require("../config/db");

const User = require("./User");
const Project = require("./Project");
const Task = require("./Task");

User.hasMany(Project, { foreignKey: "createdBy" });
Project.belongsTo(User, { foreignKey: "createdBy" });

Project.hasMany(Task);
Task.belongsTo(Project);

User.hasMany(Task, { foreignKey: "assignedTo" });
Task.belongsTo(User, { foreignKey: "assignedTo" });

module.exports = { sequelize, User, Project, Task };
