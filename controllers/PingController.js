const { GetPing } = require('../actions/Ping/GetPing');

exports.getPing = (req, res) => new GetPing().doAction(req, res);
