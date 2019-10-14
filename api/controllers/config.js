const paypal = require('paypal-rest-sdk');
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'Put Your client Id here',
    'client_secret': 'Put Your Secret Key'
});
module.exports = paypal;