var express = require("express");
var router = express.Router();
const controller = require("./players.controller");

const methodNotAllowed = require("../../errors/methodNotAllowed");

/* GET users listing. */
router
  .route("/:player_discord_id/start")
  .post(controller.newPlayer)
  .all(methodNotAllowed);

module.exports = router;
