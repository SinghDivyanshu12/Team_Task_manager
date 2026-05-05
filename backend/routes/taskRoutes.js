const router = require("express").Router();
const auth = require("../middleware/auth");
const { createTask, getTasks, updateTaskStatus } = require("../controllers/taskController");

router.post("/", auth, createTask);
router.get("/", auth, getTasks);
router.put("/:id/status", auth, updateTaskStatus);

module.exports = router;