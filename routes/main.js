const express = require("express");
const mainController = require("../controllers/main");
const router = express.Router();

router.get("/", mainController.getHomePage);

router.get("/contact",mainController.getContactPage);

module.exports = router;