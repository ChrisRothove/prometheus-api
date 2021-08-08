const knex = require("../../db/connection");

function listByServer(server_name) {
  return knex("ships")
    .select("ship_name", "ship_id")
    .where("server_name", server_name);
}

function listByPlayer(player_discord_id) {
  return knex("ships")
    .select("ship_name", "ship_id")
    .where("player_discord_id", player_discord_id);
}

function listStarterShips() {
  return knex("ship_types").select("*").where("ship_class", "starter");
}

function listTypes(ship_class) {
  return knex("ship_types").select("*").where("ship_class", ship_class);
}

function newShip(player_discord_id, details) {
  return knex("ships").insert({
    ...details,
    player_discord_id: player_discord_id,
  });
}

module.exports = {
  listByServer,
  listByPlayer,
  listStarterShips,
  listTypes,
  newShip,
};
