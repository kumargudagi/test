const userModel = require('../models/userModel')
let userDal = new Object();

let dalResponse = (status, data, extra) => {
  return { status: status, data: data, extra: extra };
};

userDal.adduser = async (data) => {
  try {
    let user = new userModel(data);
    let res = await user.save();
    if (!res) {
      return dalResponse(false, res);
    }
    return dalResponse(true, res);
  } catch (error) {
    return dalResponse(false, error.message);
  }
};
module.exports = userDal
