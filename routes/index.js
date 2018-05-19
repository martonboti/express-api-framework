const express = require('express');

const router = express.Router();

const PingController = require('../controllers/PingController');
const { Authenticate } = require('../middleware/Authenticate');

router.get('/', PingController.getPing);
router.get('/ping', Authenticate, PingController.getPing);

module.exports = router;
