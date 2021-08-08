const shipsService = require("./ships.service");
const playersService = require("../players/players.service");
const asyncErrorBoundary = require("../../utils/asyncErrorBoundary");

/**~~~~~~~~~~~~~~~~MIDDLEWARE~~~~~~~~~~~~~~~*/

async function playerShouldExist(req, res, next) {
  const id = req.params.player_discord_id;
  const foundPlayer = await playersService.read(id);
  if (foundPlayer) {
    res.locals.foundPlayer = foundPlayer;
    next();
  } else {
    next({
      status: 404,
      message: `player ${id} is not found.`,
    });
  }
}

async function playerHasNoShips(req, res, next) {
  const id = req.params.player_discord_id;
  const playerShips = await shipsService.listByPlayer(id);
  if (playerShips.length) {
    next({
      status: 400,
      message: "You've already got a starter ship!",
    });
  } else {
    next();
  }
}

/**~~~~~~~~~~~~~~~~END POINTS~~~~~~~~~~~~~~~*/

async function pickStarterShip(req, res, next) {
  const id = res.locals.foundPlayer.player_discord_id;
  res.status(201).json({ data: await shipsService.newShip(id, req.body.data) });
}

module.exports = {
  pickStarterShip: [
    asyncErrorBoundary(playerShouldExist),
    asyncErrorBoundary(playerHasNoShips),
    asyncErrorBoundary(pickStarterShip),
  ],
};
