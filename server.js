const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const router = require('./api/routes/route');
app.use(bodyParser.json({ 'limit': '50mb', 'type': 'application/json', 'extended': true }));
app.use(bodyParser.urlencoded({ 'limit': '50mb', 'type': 'application/x-www-url-form-encoding', 'extended': true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 1000;
app.listen(port, () => {
    console.log('Server is available on Port 1000');
});
