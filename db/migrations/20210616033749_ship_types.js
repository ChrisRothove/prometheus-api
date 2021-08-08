exports.up = function (knex) {
  return knex.schema.createTable("ship_types", function (table) {
    table.increments("type_id").primary();
    table.string("type_name");
    table.integer("base_power");
    table.integer("base_armor");
    table.integer("base_energy");
    table.integer("base_speed");
    table.string("ship_class");
    table.integer("cost");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ship_types");
};
