const sequelize = require("sequelize");
const database = require("../db");
const schema = "";

class CUSTOMER extends sequelize.Model {}

CUSTOMER.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
    },
    cep: {
      type: sequelize.STRING,
      allowNull: false,
    },
    parentesco: {
      type: sequelize.STRING,
      allowNull: true,
    },
    endereco: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "dev_customer",
    schema,
  }
);

module.exports = CUSTOMER;
