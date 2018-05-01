const { PostExample } = require('../actions/Example/PostExample');

exports.postData = (req, res) => new PostExample().doAction(req, res);
