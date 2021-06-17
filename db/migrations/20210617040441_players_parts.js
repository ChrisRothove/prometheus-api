exports.up = function (knex) {
  return knex.schema.createTable("players_parts", function (table) {
    table.increments("slot_id").primary();
    table.integer("part_id").unsigned();
    table.foreign("part_id").references("parts.part_id");
    table.integer("player_id");
    table.foreign("player_id").references("players.player_id");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("players_parts");
};
