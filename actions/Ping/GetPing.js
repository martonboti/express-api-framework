const { AppAction } = require('./../Common/AppAction');

class GetPing extends AppAction {
  executeAction(req) {
    return new Promise((resolve, reject) => {
      resolve({
        status: 'Service up',
        apiVersion: 'v1.0'
      });
    });
  }
}

module.exports = { GetPing };
