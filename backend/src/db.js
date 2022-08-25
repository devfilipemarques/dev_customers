const sequelize = require("sequelize");

const database = new sequelize("dev_customer", "dev_customer", "dev_customer", {
  dialect: "mssql",
  host: "localhost",
  port: 1433,
});

database.sync();

module.export = database;
