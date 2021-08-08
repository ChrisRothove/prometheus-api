exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE ship_types RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("ship_types").insert([
        {
          type_id: 1,
          type_name: "Highwind",
          base_power: 2,
          base_armor: 2,
          base_energy: 2,
          base_speed: 2,
          ship_class: "starter",
          cost: 0,
        },
        {
          type_id: 2,
          type_name: "Cactuar",
          base_power: 1,
          base_armor: 4,
          base_energy: 2,
          base_speed: 1,
          ship_class: "starter",
          cost: 0,
        },
        {
          type_id: 3,
          type_name: "Hyperion",
          base_power: 1,
          base_armor: 2,
          base_energy: 3,
          base_speed: 2,
          ship_class: "starter",
          cost: 0,
        },
      ]);
    });
};
