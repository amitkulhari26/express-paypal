const express = require('express');
const router = express.Router();
const homePageController = require('../controllers/home.api');
router
    .route('/')
    .get(homePageController.HomePage);

router
    .route('/paywithpaypal')
    .post(homePageController.PayWithPaypal);
router
    .route('/sucess')
    .get(homePageController.chargeUser);

module.exports = router;