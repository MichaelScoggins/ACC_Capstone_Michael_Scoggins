const express = require("express");
const usersController = require("../controllers/users");
const { checkJwt } = require("../middleware");
const router = express.Router();

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", checkJwt, usersController.createUser);
router.post("/profile", usersController.createUserProfile);
router.post("/credentials", usersController.createUserCredentials);
router.put("/:id", checkJwt, usersController.updateUserById);
router.delete("/:first_name", checkJwt, usersController.deleteUserByFirstName);

module.exports = router;
