const sequelize = require("sequelize");

const database = new sequelize("devcustomer2", "devcustomer2", "devcustomer2", {
  dialect: "mssql",
  host: "devcustomer2.cgpitotysboy.us-east-1.rds.amazonaws.com",
  port: 1433,
});

database.sync();

module.export = database;
