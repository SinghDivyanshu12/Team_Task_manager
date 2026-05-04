const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password)
    return res.status(400).json("All fields required");

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash, role });

  res.json(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(400).json("User not found");

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(400).json("Wrong password");

  const token = jwt.sign({ id: user.id, role: user.role }, "secret123");

  res.json({ token });
};
