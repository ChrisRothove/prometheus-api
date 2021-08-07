exports.up = function (knex) {
  return knex.schema.createTable("enemies", (table) => {
    table.increments("enemy_id").primary();
    table.string("enemy_name");
    table.integer("enemy_HP");
    table.integer("enemy_power");
    table.integer("enemy_armor");
    table.integer("enemy_energy");
    table.integer("enemy_speed");
    table.integer("stun_resist");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("enemies");
};
