const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const { createProject, getProjects } = require("../controllers/projectController");

router.post("/", auth, role("Admin"), createProject);
router.get("/", auth, getProjects);

module.exports = router;