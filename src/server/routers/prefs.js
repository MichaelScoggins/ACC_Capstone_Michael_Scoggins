const express = require("express");
const usersController = require("../controllers/users");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user preference functions
router.get("/prefs", usersController.getAllUserPrefs);
router.post("/prefs", usersController.createUserPrefs);
router.put("/prefs/:id", usersController.setUserPrefs);

module.exports = router;
