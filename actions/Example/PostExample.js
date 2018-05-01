const { AppAction } = require('./../Common/AppAction');
const { Example } = require('./../../models/Example');
const ValidationHelper = require('./../../helpers/ValidationHelper');

class PostExample extends AppAction {
  executeAction(req) {
    return ValidationHelper.validateAndSave(req, Example);
  }
}

module.exports = { PostExample };
