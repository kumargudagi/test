const mongoose = require('mongoose')
const retryIntervalInMS = 5000;

const options = {
  useNewUrlParser: true,
  autoIndex: false,
  reconnectTries: 30,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0,
  useUnifiedTopology: true 
};

const dbConnection = async () => {
  const dburl = 'mongodb://127.0.0.1:27017/test';
  console.log("MongoDB url " + dburl);
  console.log("MongoDB connection Initiated");
  mongoose
    .connect(dburl, options)
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch(err => {
      console.log(err.message ? err.message : "Mongodb connection error");
      console.log(
        "MongoDB Connection Failed, retrying in " + retryIntervalInMS + " ms"
      );
      setTimeout(paymentsConnection, retryIntervalInMS);
    });
};

// eslint-disable-next-line no-undef
process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    // eslint-disable-next-line no-undef
    process.exit(0);
  });
});

module.exports={
  dbConnection: dbConnection
};
