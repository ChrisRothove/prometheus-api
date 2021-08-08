var express = require("express");
var router = express.Router();
const controller = require("./ships.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

/* GET home page. */
router
  .route("/:player_discord_id/ships")
  .post(controller.pickStarterShip)
  .all(methodNotAllowed);

module.exports = router;
