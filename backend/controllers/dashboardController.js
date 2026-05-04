const { Task } = require("../models");
const { Op } = require("sequelize");

exports.getDashboard = async (req, res) => {
  const total = await Task.count();
  const completed = await Task.count({ where: { status: "Done" } });
  const pending = await Task.count({ where: { status: "Pending" } });
  const overdue = await Task.count({
    where: {
      deadline: { [Op.lt]: new Date() },
      status: { [Op.ne]: "Done" },
    },
  });

  res.json({ total, completed, pending, overdue });
};