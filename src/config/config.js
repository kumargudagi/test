/* eslint-disable no-undef */
import url from "url";
var config = new Object();

config = {
  server: {
    app: {
      version: "v2.0.0",
      port: process.env.CR_API_URL
        ? url.parse(process.env.CR_API_URL).port
        : 5000
    }
  },
  services: {
    vault: {
      baseUrl: process.env.CR_API_VAULT_URL
    },
    profile: {
      baseUrl: process.env.CR_API_PROFILE_URL
    },
    authentication: {
      baseUrl: process.env.CR_API_AUTH_URL
    }
  }
};

export default config;
