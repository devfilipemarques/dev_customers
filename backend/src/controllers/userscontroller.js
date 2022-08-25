const ModelUsers = require("../models/users");

module.exports = {
  async List(req, res) {
    try {
      const users = await ModelUsers.findAll();
      return res.json(users);
    } catch (notfound) {
      return console.error("Error na List:", notfound);
    }
  },

  async Create(req, res) {
    try {
      const users = await ModelUsers.create({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      return res.json(users);
    } catch (notfound) {
      return console.error("Error na Create:", notfound);
    }
  },

  async Update(req, res) {
    try {
      const user = await ModelUsers.findByPk(req.body.id);
      if (user) {
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        await user.save();
      }
      return res.json(user);
    } catch (notfound) {
      return console.error("Error na Update:", notfound);
    }
  },

  async GetOne(req, res) {
    try {
      const user = await ModelUsers.findByPk(req.body.id);
      return res.json(user);
    } catch (notfound) {
      return console.error("Error na GetOne:", notfound);
    }
  },

  async Delete(req, res) {
    try {
      const user = await ModelUsers.findByPk(req.body.id);
      await user.destroy();
      return res.json(user);
    } catch (notfound) {
      return console.error("Error na Delete:", notfound);
    }
  },
};
