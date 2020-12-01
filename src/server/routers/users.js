const express = require("express");
const usersController = require("../controllers/users");
const { authenticate } = require("../middleware");
const router = express.Router();

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.createUser);
router.post("/profile", usersController.createUserProfile);
router.post("/credentials", usersController.createUserCredentials);
router.put("/:id", usersController.updateUserById);
router.delete("/:first_name", usersController.deleteUserByFirstName);

module.exports = router;
