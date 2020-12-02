const express = require("express");
const getAllUserPrefsController = require("../controllers/prefs/getalluserprefs");
const createUserPrefsController = require("../controllers/prefs/createuserprefs");
const setUserPrefsController = require("../controllers/prefs/setuserprefs");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user preference functions
router.get("/", getAllUserPrefsController.getAllUserPrefs);

router.post("/", createUserPrefsController.createUserPrefs);

router.put("/:id", setUserPrefsController.setUserPrefs);

module.exports = router;
