let expo = module.exports;
expo.HomePage = (req, res) => {
    res
        .status(200)
        .json('From here baby');
};
expo.PayWithPaypal = (req, res) => {
    res
        .status(200)
        .json('PayPal');
};
