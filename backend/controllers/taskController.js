const { Task, User, Project } = require("../models");

exports.createTask = async (req, res) => {
  const { title, assignedTo, projectId, deadline } = req.body;

  if (!title) return res.status(400).json("Title required");

  const task = await Task.create({
    title,
    assignedTo,
    ProjectId: projectId,
    deadline,
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    include: [User, Project],
  });

  res.json(tasks);
};

exports.updateTaskStatus = async (req, res) => {
  const { status } = req.body;

  await Task.update({ status }, { where: { id: req.params.id } });

  res.json("Updated");
};