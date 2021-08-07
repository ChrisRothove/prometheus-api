exports.up = function (knex) {
  return knex.schema.createTable("active_enemies", (table) => {
    table.increments("instance_id").primary();
    table.integer("enemy_id");
    table.foreign("enemy_id").references("enemies.enemy_id");
    table.integer("server_id");
    table.foreign("server_id").references("servers.server_id");
    table.integer("current_hp");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("active_enemies");
};
