const express = require("express");
const createFavoriteController = require("../controllers/favorites/createfavorite");
const getFavoritesByUsernameController = require("../controllers/favorites/getfavoritesbyusername");
const getAllUserFavoritesController = require("../controllers/favorites/getalluserfavorites");
const deleteFavoriteByIdController = require("../controllers/favorites/deletefavoritebyid");
// const { checkJwt } = require("../middleware");
const { authenticate } = require("../middleware");
const router = express.Router();

// user preference functions
router.get(
  "/",
  authenticate,
  getAllUserFavoritesController.getAllUserFavorites
);

router.get(
  "/:id",
  authenticate,
  getFavoritesByUsernameController.getFavoritesByUsername
);

router.post("/", authenticate, createFavoriteController.createFavorite);

router.delete(
  "/:id",
  authenticate,
  deleteFavoriteByIdController.deleteFavoriteById
);

// router.put("/:id", setUserPrefsController.setUserPrefs);

module.exports = router;
