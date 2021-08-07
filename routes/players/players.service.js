const knex = require("../../db/connection");

function list() {
  return knex("players").select("*");
}

function update(player_discord_id, input) {
  return knex("players")
    .where("player_discord_id", player_discord_id)
    .update(input, "*")
    .then((result) => result[0]);
}

function create(input) {
  return knex("players").insert(input, "*");
}

module.exports = {
  list,
  update,
  create,
};
