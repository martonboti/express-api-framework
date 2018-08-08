const { Apikeys } = require('../models/Apikeys');

const Authenticate = (req, res, next) => {
  const value = req.header('x-api-key');

  Apikeys.findOne({ key: value }).then((user) => {
    if (!user) {
      throw new Error('Invalid api key');
    }
    console.log(`Key: ${value} Accessing: ${req.method} ${req.url}`); // eslint-disable-line
    return next();
  }).catch((e) => {
    res.status(401).send({
      error: {
        status_code: 401,
        message: 'Invalid api key',
      }
    });
  });
};

module.exports = { Authenticate };
