const express = require('express');

const router = express.Router();

const PingController = require('../controllers/PingController');

router.get('/', PingController.getPing);
router.get('/ping', PingController.getPing);

module.exports = router;
