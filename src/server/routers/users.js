const express = require("express");
const usersController = require("../controllers/users");
const { checkJwt } = require("../middleware");
const router = express.Router();

// basic user functions
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.createUser);
router.put("/:id", checkJwt, usersController.updateUserById);
router.delete("/:first_name", checkJwt, usersController.deleteUserByFirstName);

// user profile functions
router.post("/profile", usersController.createUserProfile);

// user preference functions
router.get("/prefs", usersController.getAllUserPrefs);
router.post("/prefs", usersController.createUserPrefs);
router.put("/prefs/:id", usersController.setUserPrefs);

// user credentials functions (username and password)
router.post("/credentials", usersController.createUserCredentials);

module.exports = router;
