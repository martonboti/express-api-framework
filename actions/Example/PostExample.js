const _ = require('lodash');

const { AppAction } = require('./../Common/AppAction');
const { Example } = require('./../../models/Example');

class PostExample extends AppAction {
  executeAction(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const body = _.pick(req.body, ['text', 'completed']);
        const example = new Example(body);
        await example.save();
        resolve(example);
      } catch (e) {
        reject({
          code: 400,
          message: e.message
        });
      }
    });
  }
}

module.exports = { PostExample };
