var express = require("express");
var router = express.Router();
const controller = require("./ships.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

router
  .route("/:player_discord_id/start")
  .post(controller.pickStarterShip)
  .all(methodNotAllowed);

module.exports = router;
