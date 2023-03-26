const express = require("express");
const mainController = require("../controllers/main");
const router = express.Router();

router.get("/", mainController.getHomePage);

router.get("/contact",mainController.getContactPage);

router.get("/team",mainController.getTeamPage);

router.get("/projects",mainController.getprojectsPage);

router.get("/blog",mainController.getBlogPage);

router.get("/about",mainController.getAboutPage);

module.exports = router;