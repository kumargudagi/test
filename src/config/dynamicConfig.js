import vaultService from "../services/vaultService";
import logger from '../logger';
import sleep from 'sleep'
let dynamicConfig = new Object();
dynamicConfig.loadConfig = {};
dynamicConfig.config = {};
let vaultServiceAvailable = false;

const vaultConnect = async function () {
 try {
   do {
     let vaultServiceResponse = await vaultService.readVault('mongodb');
     if (vaultServiceResponse.status) {
       vaultServiceAvailable = true
       logger.info('vault-service connected successfully');
     } else {
       logger.warn('unable to connect vault-service. trying again ...');
       sleep.sleep(2);
     }
   } while (vaultServiceAvailable == false);
 } catch (error) {
   logger.error('vaultConnect @dynamicConfig failed with error : ' + error.message);
 }
}

dynamicConfig.loadConfig = async () => {
  await vaultConnect();
  let vaultServiceMongoResponse = await vaultService.readVault("mongodb");
  if (vaultServiceMongoResponse.status) {
    const mongodb = vaultServiceMongoResponse.data;
    const dynamicEnvironments = {
      mongodb: {
        review: mongodb.native.review
      }
    };
    dynamicConfig.config = dynamicEnvironments;
    // eslint-disable-next-line no-undef
    module.exports = dynamicConfig;
  }
  logger.info('Failed to load dynamic environments');
  return {};
};
// eslint-disable-next-line no-undef
module.exports = dynamicConfig;