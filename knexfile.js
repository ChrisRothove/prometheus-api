const path = require("path");

if (process.env.USER) require("dotenv").config();

const { PRODUCTION_URL, DEVELOPMENT_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DEVELOPMENT_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: PRODUCTION_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds"),
    },
  },

  test: {
    client: "postgresql",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
