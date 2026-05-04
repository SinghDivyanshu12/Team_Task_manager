const { Project } = require("../models");

exports.createProject = async (req, res) => {
  const { name, members } = req.body;

  if (!name) return res.status(400).json("Name required");

  const project = await Project.create({
    name,
    members,
    createdBy: req.user.id,
  });

  res.json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
};