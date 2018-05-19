require('../config/config.js');

const hat = require('hat');
const { MongoClient } = require('mongodb');

MongoClient.connect(process.env.MONGODB_URI, (err, database) => {
  if (err) {
    console.log('Unable to connect to MongoDB server'); // eslint-disable-line no-console
    process.exit(1);
  }
  console.log('Connected to MongoDB server'); // eslint-disable-line no-console

  const dbName = process.env.MONGODB_URI.substr(process.env.MONGODB_URI.lastIndexOf('/') + 1);
  database.db(dbName).collection('apikeys').insertOne({
    key: hat()
  }, (error, result) => {
    if (error) {
      console.log('Unable to create api key', error); // eslint-disable-line no-console
      process.exit(1);
    }
    console.log('Api key created: ', result.ops[0].key); // eslint-disable-line no-console
    process.exit(1);
  });
});
