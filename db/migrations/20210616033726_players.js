exports.up = function (knex) {
  return knex.schema.createTable("players", function (table) {
    table.increments("player_id").primary();
    table.integer("player_discord_id").unique();
    table.integer("player_level");
    table.integer("player_exp");
    table.integer("credits");
    table.integer("server_id").unsigned();
    table.foreign("server_id").references("servers.server_id");
    table.datetime("last_mission", { precision: 4 });
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("players");
};
