exports.up = function (knex) {
  return knex.schema.createTable("parts", function (table) {
    table.increments("part_id").primary();
    table.string("part_description");
    table.string("part_effect");
    table.integer("part_cost");
    table.enu("part_type", ["canon", "body", "special", "wings", "cockpit"]);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("parts");
};
