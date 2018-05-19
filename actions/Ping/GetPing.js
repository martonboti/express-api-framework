const { AppAction } = require('./../Common/AppAction');

class GetPing extends AppAction {
  executeAction(req) {
    return {
      status: 'Service up',
      apiVersion: 'v1.0'
    };
  }
}

module.exports = { GetPing };
