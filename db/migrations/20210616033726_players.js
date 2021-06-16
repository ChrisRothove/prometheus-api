exports.up = function (knex) {
  return knex.schema.createTable("players", function (table) {
    table.increments();
    table.string("player_username");
    table.integer("player_level");
    table.integer("player_exp");
    table.integer("credits");
    table.integer("server_id").unsigned();
    table.foreign("server_id").references("servers.server_id");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("players");
};
