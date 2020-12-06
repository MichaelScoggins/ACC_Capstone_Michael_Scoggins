const express = require("express");
const getAllUserPrefsController = require("../controllers/prefs/getalluserprefs");
const getUserPrefsByUsernameController = require("../controllers/prefs/getprefsbyusername");
const createUserPrefsController = require("../controllers/prefs/createuserprefs");
const setUserPrefsController = require("../controllers/prefs/setuserprefs");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user preference functions
router.get("/", getAllUserPrefsController.getAllUserPrefs);

router.get("/:id", getUserPrefsByUsernameController.getPrefsByUsername);

router.post("/", createUserPrefsController.createUserPrefs);

router.put("/:id", setUserPrefsController.setUserPrefs);

module.exports = router;
