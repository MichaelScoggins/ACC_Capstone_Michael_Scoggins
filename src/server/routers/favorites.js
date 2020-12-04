const express = require("express");
const createFavoriteController = require("../controllers/favorites/createfavorite");
const getFavoritesByUsernameController = require("../controllers/favorites/getfavoritesbyusername");
const getAllUserFavoritesController = require("../controllers/favorites/getalluserfavorites");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user preference functions
router.get("/", getAllUserFavoritesController.getAllUserFavorites);

router.get("/:id", getFavoritesByUsernameController.getFavoritesByUsername);

router.post("/", createFavoriteController.createFavorite);

// router.put("/:id", setUserPrefsController.setUserPrefs);

module.exports = router;
