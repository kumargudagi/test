const userController = new Object();
const userDal = require( '../dal/userDal');

const controllerResponse = (status,resStatusCode, resMessageKey, resData) => {
  return {
    status:status,
    responseStatusCode: resStatusCode,
    responseMessageKey: resMessageKey,
    responseData: resData
  };
}
userController.adduser = async req => {
  try {
    let body = req.body;
    const userdata = await userDal.adduser(body);
    if (userdata.status) {
      return controllerResponse(true, 200, "ok", userdata);
    }
    return controllerResponse(false, 500, "db-failed", userdata);
  } catch (error) {
    return controllerResponse(false,500,"internal-server-error",error.message);
  }
};

module.exports = userController;