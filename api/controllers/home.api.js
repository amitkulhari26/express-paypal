const expo = module.exports;
const paypal = require('./config');
expo.HomePage = (req, res) => {
    res
        .status(200)
        .json('From here baby');
};
expo.PayWithPaypal = (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:1000/api/sucess",
            "cancel_url": "http://localhost:1000/api/cancle"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": req.body.bookName,
                    "sku": "001",
                    "price": req.body.price,
                    "currency": req.body.currency,
                    "quantity": req.body.qty
                }]
            },
            "amount": {
                "currency": req.body.currency,
                "total": req.body.price
            },
            "description": req.body.bookName + " Book"
        }]
    };
    paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
            console.log('Error h', error);
            throw error;
        } else {
            let lenght = payment.links.length;
            for (let i = 0; i < lenght; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    console.log(payment.links[i].href);
                    res.redirect(payment.links[i].href);
                }
            }

        }
    });
};
expo.chargeUser = (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "INR",
                "total": "500"
            }
        }]
    };
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log("Get Payment Response");
            console.log(JSON.stringify(payment));
            res.json('Sucess!!');
        }
    });
};
