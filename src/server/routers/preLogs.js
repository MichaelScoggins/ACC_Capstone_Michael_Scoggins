const express = require("express");
const usersController = require("../controllers/preLogs");
const { authenticate } = require("../middleware");
const router = express.Router();

router.get("/:id", usersController.getPreLogById);
router.post("/", usersController.createPreLog);

module.exports = router;
