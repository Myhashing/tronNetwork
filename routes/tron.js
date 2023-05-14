const express = require('express');
const tronController = require('../controllers/tronController');
const router = express.Router();

router.post('/createAccount', tronController.createAccount);
router.get('/getBalance/:address', tronController.getBalance);
router.get('/getTokenBalance/:address', tronController.getTokenBalance);
router.post('/sendTrx', tronController.sendTrx);
router.post('/sendToken', tronController.sendToken);
router.get('/transactionHistory/:address', tronController.transactionHistory);


module.exports = router;
