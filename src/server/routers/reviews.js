const express = require("express");
const usersController = require("../controllers/reviews");
const { authenticate } = require("../middleware");
const router = express.Router();

router.get("/:id", usersController.getReviewById);
router.post("/", usersController.createReview);

module.exports = router;
