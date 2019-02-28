const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
// Önce bu işlemleri yap sonra diğer metotlara geç
app.use(bodyParser.urlencoded({extended: false})) // Post form olursa log ekranında görüntüle
app.use(bodyParser.json()) // Post json olursa log ekranında görüntüle

app.get('/profile', (req, res) => {
    res.send('getting profiles');
})

app.post('/profile', (req, res) => {
    console.log(req.body);
    res.send('Success');
})

app.listen(3000);