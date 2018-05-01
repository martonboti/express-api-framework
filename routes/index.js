const express = require('express');

const router = express.Router();

const PingController = require('../controllers/PingController');
const ExampleController = require('../controllers/ExampleController');

router.get('/', PingController.getPing);
router.get('/ping', PingController.getPing);
// example routes
router.post('/post-data', ExampleController.postData);

module.exports = router;
