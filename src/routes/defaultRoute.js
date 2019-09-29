const express= require('express');
const defautController = require('../controllers/defaultController')
const defaultRoute = express.Router();

defaultRoute.route("/").get(async (req, res) => {
  let resBody = await defautController.default(req);
  res.send(resBody);
});


module.exports = defaultRoute
