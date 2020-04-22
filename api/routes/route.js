const express = require('express');
const router = express.Router();
const homePageController = require('../controllers/home.api');
router
    .route('/')
    .get(homePageController.HomePage);

router
    .route('/paywithpaypal')
    .post(homePageController.PayWithPaypal);


module.exports = router;