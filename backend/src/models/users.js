const sequelize = require("sequelize");
const database = require("../db");
const schema = "";

class Users extends sequelize.Model {}

Users.init(
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
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "dev_user",
    schema,
  }
);

module.exports = Users;
