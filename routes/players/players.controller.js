const playersService = require("./players.service");
const shipsService = require("../ships/ships.service");
const asyncErrorBoundary = require("../../utils/asyncErrorBoundary");

/**~~~~~~~~~~~~~~~~MIDDLEWARE~~~~~~~~~~~~~~~*/

async function playerShouldExist(req, res, next) {
  const id = req.params.player_discord_id;
  const foundPlayer = await playersService.read(id);
  if (foundPlayer) {
    next();
  } else {
    next({
      status: 404,
      message: `player ${id} is not found.`,
    });
  }
}

async function playerShouldNotExist(req, res, next) {
  const id = req.params.player_discord_id;
  const foundPlayer = await playersService.read(id);
  if (!foundPlayer) {
    res.locals.id = id;
    next();
  } else {
    next({
      status: 404,
      message: `player ${id} already exists`,
    });
  }
}

/**~~~~~~~~~~~~~~~~END POINTS~~~~~~~~~~~~~~~*/

async function newPlayer(req, res, next) {
  const starterShips = await shipsService.listStarterShips();
  await playersService.create({ player_discord_id: res.locals.id });
  res.status(201).json({ data: starterShips });
}

module.exports = {
  newPlayer: [
    asyncErrorBoundary(playerShouldNotExist),
    asyncErrorBoundary(newPlayer),
  ],
};
