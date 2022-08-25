const ModelCustomer = require("../models/customer");

module.exports = {
  async List(res) {
    try {
      const customer = await ModelCustomer.findAll();
      return res.json(customer);
    } catch (notfound) {
      return console.error("Error na List:", notfound);
    }
  },

  async Create(req, res) {
    try {
      const customer = await ModelCustomer.create({
        id: req.body.id,
        name: req.body.name,
        cep: req.body.name,
        email: req.body.email,
        endereco: req.body.password,
      });

      return res.json(customer);
    } catch (notfound) {
      return console.error("Error na Create:", notfound);
    }
  },

  async Update(req, res) {
    try {
      const customer = await ModelCustomer.findByPk(req.body.id);
      if (customer) {
        customer.name = req.body.name;
        customer.email = req.body.email;
        customer.cep = req.body.cep;
        customer.endereco = req.body.endereco;
        await customer.save();
      }
      return res.json(customer);
    } catch (notfound) {
      return console.error("Error na Update:", notfound);
    }
  },

  async GetOne(req, res) {
    try {
      const customer = await ModelCustomer.findByPk(req.body.id);
      return res.json(customer);
    } catch (notfound) {
      return console.error("Error na GetOne:", notfound);
    }
  },

  async Delete(req, res) {
    try {
      const customer = await ModelCustomer.findByPk(req.body.id);
      await customer.destroy();
      return res.json(customer);
    } catch (notfound) {
      return console.error("Error na Delete:", notfound);
    }
  },
};
