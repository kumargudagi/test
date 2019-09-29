const express= require('express');
const userController = require('../controllers/userController')
const userRoute = express.Router();

userRoute.route("/").post(async (req, res) => {
  let resBody = await userController.adduser(req);
  res.send(resBody);
});

module.exports = userRoute
