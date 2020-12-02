const express = require("express");
const getAllUsersController = require("../controllers/users/getallusers");
const getUserByIdController = require("../controllers/users/getuserbyid");
const createUserController = require("../controllers/users/createuser");
const updateUserByIdController = require("../controllers/users/updateuserbyid");
const deleteUserByFirstNameController = require("../controllers/users/deleteuserbyfirstname");
const createUserCredentialsController = require("../controllers/users/createusercredentials");
const { checkJwt } = require("../middleware");
const router = express.Router();

// basic user functions
router.get("/", getAllUsersController.getAllUsers);
router.get("/:id", getUserByIdController.getUserById);
router.post("/", createUserController.createUser);
router.put("/:id", checkJwt, updateUserByIdController.updateUserById);
router.delete(
  "/:first_name",
  checkJwt,
  deleteUserByFirstNameController.deleteUserByFirstName
);

// user credentials functions (username and password)
router.post(
  "/credentials",
  createUserCredentialsController.createUserCredentials
);

module.exports = router;
