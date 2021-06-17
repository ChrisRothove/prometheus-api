exports.up = function (knex) {
  return knex.schema.createTable("ships", function (table) {
    table.increments("ship_id").primary();
    table.string("ship_name").unique();
    table.integer("ship_power");
    table.integer("ship_energy");
    table.integer("ship_armor");
    table.integer("ship_speed");
    table.integer("ship_stun");
    table.integer("ship_total_hp");
    table.integer("ship_current_hp");
    table.integer("ship_shield");
    table.integer("ship_canon");
    table.foreign("ship_canon").references("players_parts.slot_id");
    table.integer("ship_body");
    table.foreign("ship_body").references("players_parts.slot_id");
    table.integer("ship_special");
    table.foreign("ship_special").references("players_parts.slot_id");
    table.integer("ship_wings");
    table.foreign("ship_wings").references("players_parts.slot_id");
    table.integer("ship_cockpit");
    table.foreign("ship_cockpit").references("players_parts.slot_id");
    table.integer("ship_type");
    table.foreign("ship_type").references("ship_types.type_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ships");
};
