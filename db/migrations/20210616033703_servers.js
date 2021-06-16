exports.up = function (knex) {
  return knex.schema.createTable("servers", function (table) {
    table.increments("server_id").primary();
    table.string("server_name").unique();
    table.integer("prometheus_hp").defaultTo(300);
    table.integer("prometheus_current_hp").defaultTo(300);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("servers");
};
