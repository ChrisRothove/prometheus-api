var express = require("express");
var router = express.Router();

const methodNotAllowed = require("../../errors/methodNotAllowed");

/* GET users listing. */
router.get("/:player_discord_id/start").post().put().all(methodNotAllowed);

module.exports = router;
