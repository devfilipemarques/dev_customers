const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "devcustomer2",
  "devcustomer2",
  "devcustomer2",
  {
    dialect: "mssql",
    host: "devcustomer2.cgpitotysboy.us-east-1.rds.amazonaws.com",
    port: 1433,

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    define: {
      timestamps: false,
    },
  }
);

sequelize.sync();

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
