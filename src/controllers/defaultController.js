const defaultController = new Object();
const controllerResponse = (status,resStatusCode, resMessageKey, resData) => {
  return {
    status:status,
    responseStatusCode: resStatusCode,
    responseMessageKey: resMessageKey,
    responseData: resData
  };
}
defaultController.default = async () => {
  let res = {
    "version": '1.0.0',
  };
  return controllerResponse(true,400, "ok", res);
}

module.exports = defaultController;